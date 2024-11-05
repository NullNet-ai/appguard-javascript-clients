import { NextFunction, Request, Response, Router, Send } from 'express';
import { AppGuardService } from './app-guard-express';
import { AppGuardGenericVal } from './proto/appguard/AppGuardGenericVal';
import { AppGuardTcpInfo } from './proto/appguard/AppGuardTcpInfo';
import { FirewallPolicy } from './proto/appguard/FirewallPolicy';

type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

export type AppGuardConfig = {
  host: string;
  port: number;
  timeoutUsec?: number;
  defaultPolicy?: FirewallPolicy;
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
      const handleHTTPResponseResponse = await appGuardService.handleHttpResponse(
        {
          // @ts-ignore
          code: res.statusCode,
          // @ts-ignore
          headers: genericValReducer(
            response_headers as Record<string, string | number | Array<string>>
          ),
          tcpInfo: tcp_info,
        }
      );

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

      const handleTCPConnectionResponse = await appGuardService.handleTcpConnection(
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
      const handleHTTPRequestResponse = await appGuardService.handleHttpRequest(
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
      );

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
