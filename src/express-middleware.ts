import { NextFunction, Request, Response, Send } from 'express';
import { AppGuardService } from './app-guard-express';
import { AppGuardTcpInfo } from './proto/appguard/AppGuardTcpInfo';
import { FirewallPolicy } from './proto/appguard/FirewallPolicy';
import {AppGuardResponse__Output} from "./proto/appguard/AppGuardResponse";
import {AppGuardTcpResponse__Output} from "./proto/appguard/AppGuardTcpResponse";
import {AppGuardTcpConnection} from "./proto/appguard/AppGuardTcpConnection";
import {AuthHandler} from "./auth";

type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

export type AppGuardConfig = {
  host: string;
  port: number;
  tls: boolean;
  timeout?: number;
  defaultPolicy: FirewallPolicy;
};


export const createAppGuardMiddleware = (config: AppGuardConfig) => {
  const appGuardService = new AppGuardService(config.host, config.port, config.tls);
  let authHandler = new AuthHandler(appGuardService);

  async function initialize() {
    await appGuardService.onModuleInit();
  }
  initialize();

    const firewallPromise = (promise: Promise<AppGuardResponse__Output>): Promise<AppGuardResponse__Output> => {
        if (config.timeout !== undefined) {
            let timeoutPromise: Promise<AppGuardResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, config.timeout, {
                    policy: config.defaultPolicy
                })
            });
            return Promise.race([promise, timeoutPromise])
        } else {
            return promise
        }
    }

    const connectionPromise = (connection: AppGuardTcpConnection): Promise<AppGuardTcpResponse__Output> => {
        let promise = appGuardService.handleTcpConnection(connection);
        if (config.timeout !== undefined) {
            let timeoutPromise: Promise<AppGuardTcpResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, config.timeout, {
                    tcpInfo: {
                        connection: connection,
                    }
                })
            });
            return Promise.race([promise, timeoutPromise])
        } else {
            return promise
        }
    }

  const attachResponseHandlers = (
    res: Response,
    tcp_info: AppGuardTcpInfo
  ) => {
    // Storing the original send function
    // @ts-ignore
    const originalSend = res.send;
    // @ts-ignore
    // const originalJson = res.json;

    // Override function
    // @ts-ignore
    res.send = async function(body: string | Record<string, unknown>) {
      // @ts-ignore
      const response_headers = res.getHeaders();

      // @ts-ignore
      const handleHTTPResponseResponse = await firewallPromise(appGuardService.handleHttpResponse(
          {
              // @ts-ignore
              code: res.statusCode,
              // @ts-ignore
              headers: response_headers as Record<string, string>,
              tcpInfo: tcp_info,
              // @ts-ignore
              token: authHandler.token
          }
      ));

      if (handleHTTPResponseResponse.policy === FirewallPolicy.DENY) {
        // Destroying the socket connection instead of sending the response
        // @ts-ignore
        res.socket?.destroy();
      } else {
        // Intercepting the response.send() call
        // Calling the original send function
        //@ts-expect-error: This function is this context
        originalSend.call(this, body);
      }
    } as Send;
  };

  const handleIncomingRequest: ExpressMiddleware = async (req, res, next) => {
    try {
      // @ts-ignore
      const sourceIp =
        // @ts-ignore
        req.headers['x-real-ip'] ||
        // @ts-ignore
        req.headers['x-forwarded-for'] ||
        // @ts-ignore
        req.socket.remoteAddress;

      // console.log(
      //   // @ts-ignore
      //   `Appguard Debug XRI:${req.headers['x-real-ip']} - XFF:${req.headers['x-forwarded-for']} TCP/PROXY:${req.socket.remoteAddress} SRC=${sourceIp}`
      // );

      // console.log(
      //   // @ts-ignore
      //   `Appguard Debug From - ${sourceIp} - ${req.method} ${req.originalUrl}`
      // );

      const handleTCPConnectionResponse = await connectionPromise(
          {
              // @ts-ignore
              sourceIp: sourceIp,
              // @ts-ignore
              sourcePort: req.socket.remotePort,
              // @ts-ignore
              destinationIp: req.socket.localAddress,
              // @ts-ignore
              destinationPort: req.socket.localPort,
              // @ts-ignore
              protocol: req.protocol,
              // @ts-ignore
              token: authHandler.token
          }
      );
      const handleHTTPRequestResponse = await firewallPromise(appGuardService.handleHttpRequest(
        {
          // @ts-ignore
          originalUrl: req.originalUrl,
          // @ts-ignore
          headers: req.headers as Record<string, string>,
          // @ts-ignore
          method: req.method,
          // @ts-ignore
          body: req.body,
          // @ts-ignore
          query: req.query as Record<string, string>,
          tcpInfo: handleTCPConnectionResponse.tcpInfo,
          // @ts-ignore
          token: authHandler.token
        }
      ));

      // console.log(
      //   `Appguard Request Decision- ${FirewallPolicy.ALLOW ? 'Allow' : 'Deny'} `
      // );

      const policy = handleHTTPRequestResponse.policy;
      if (policy === FirewallPolicy.DENY) {
        // Destroying the socket connection instead of sending the response
        // @ts-ignore
        res.socket?.destroy();
      } else {
        // only attach response handlers if the request is allowed.
        // attach response handlers after we get the req.id
        attachResponseHandlers(
          res,
          handleTCPConnectionResponse.tcpInfo as AppGuardTcpInfo
        );
        next();
      }
    } catch (error) {
      console.error(error);
      // @ts-ignore
      res.status(500).send({
        module: 'app-guard',
        message: 'Internal server error',
      });
    }
  };

  return handleIncomingRequest;
};
