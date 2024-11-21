import { NextFunction, Request, Response, Router, Send } from 'express';
import { AppGuardService } from './app-guard-express';
import { AppGuardGenericVal } from './proto/genericval/AppGuardGenericVal';
import { AppGuardTcpInfo } from './proto/appguard/AppGuardTcpInfo';
import { FirewallPolicy } from './proto/appguard/FirewallPolicy';
import {AppGuardResponse__Output} from "./proto/appguard/AppGuardResponse";
import {AppGuardTcpResponse__Output} from "./proto/appguard/AppGuardTcpResponse";
import {AppGuardTcpConnection} from "./proto/appguard/AppGuardTcpConnection";

type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

export type AppGuardConfig = {
  host: string;
  port: number;
  defaultPolicy?: FirewallPolicy;
  firewallTimeout?: number;
  connectionTimeout?: number;
};

const genericValReducer = (
  obj: Record<string, string | number | Array<string>>
): Record<string, AppGuardGenericVal> => {
  return Object.entries(obj).reduce(
    (acc, current: [string, string | number | Array<string>]) => {
      const [key, value] = current;
      if (typeof value === 'string') {
        return {
          ...acc,
          [key]: {
            stringVal: value,
          },
        };
      } else if (typeof value === 'number') {
        if (Number.isInteger(value)) {
          return {
            ...acc,
            [key]: {
              intVal: value,
            },
          };
        }
        return {
          ...acc,
          [key]: {
            floatVal: value,
          },
        };
      } else if (Array.isArray(value)) {
        return {
          ...acc,
          [key]: {
            stringVecVal: {
              values: value,
            },
          },
        };
      }

      return acc;
    },
    {} as Record<string, AppGuardGenericVal>
  );
};

export const createAppGuardMiddleware = (config: AppGuardConfig) => {
  const appGuardService = new AppGuardService(config.host, config.port);

  const router = Router();

  async function initialize() {
    await appGuardService.onModuleInit();
  }
  initialize();

    const firewallPromise = (promise: Promise<AppGuardResponse__Output>): Promise<AppGuardResponse__Output> => {
        if (config.firewallTimeout !== undefined && config.defaultPolicy !== undefined) {
            let timeoutPromise: Promise<AppGuardResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, config.firewallTimeout, {
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
        if (config.connectionTimeout !== undefined) {
            let timeoutPromise: Promise<AppGuardTcpResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, config.connectionTimeout, {
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
              headers: genericValReducer(
                  response_headers as Record<string, string | number | Array<string>>
              ),
              tcpInfo: tcp_info,
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
          }
      );
      const handleHTTPRequestResponse = await firewallPromise(appGuardService.handleHttpRequest(
        {
          // @ts-ignore
          originalUrl: req.originalUrl,
          // @ts-ignore
          headers: genericValReducer(
            // @ts-ignore
            req.headers as Record<string, string | number | Array<string>>
          ),
          // @ts-ignore
          method: req.method,
          // @ts-ignore
          body: req.body,
          // @ts-ignore
          query: genericValReducer(
            //@ts-ignore
            req.query as Record<string, string | number | Array<string>>
          ),
          tcpInfo: handleTCPConnectionResponse.tcpInfo,
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

  router.use(handleIncomingRequest);

  return router;
};
