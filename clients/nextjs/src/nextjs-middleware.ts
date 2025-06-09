import {NextRequest, NextResponse} from 'next/server';
import { FirewallPolicy, AppGuardTcpInfo, AppGuardService, AuthHandler, AppGuardConfig } from 'appguard-client-common';

type NextjsMiddleware = (req: NextRequest) => Promise<NextResponse>;

export const createAppGuardMiddleware = async (config: AppGuardConfig) => {
    const appGuardService = new AppGuardService(config);
    let authHandler = new AuthHandler(appGuardService);

    async function initialize() {
        await appGuardService.onModuleInit();
        await authHandler.init();
        await appGuardService.updateFirewall({
            token: authHandler.token(),
            firewall: config.firewall
        })
    }
    await initialize();

    const handleOutgoingResponse = async (tcp_info: AppGuardTcpInfo): Promise<NextResponse> => {
        let res = NextResponse.next();
        const response_headers = res.headers;

        const handleHTTPResponseResponse = await appGuardService.firewallPromise(appGuardService.handleHttpResponse(
            {
                code: res.status,
                // @ts-ignore
                headers: response_headers as Record<string, string>,
                tcpInfo: tcp_info,
                token: authHandler.token()
            }
        ));

        if (handleHTTPResponseResponse.policy === FirewallPolicy.DENY) {
            return NextResponse.json(
                {success: false, message: 'Unauthorized'},
                {status: 401}
            );
        } else {
            return NextResponse.next();
        }
    };

    const handleIncomingRequest: NextjsMiddleware = async (req): Promise<NextResponse> => {
        try {
            const sourceIp =
                req.headers.get('x-real-ip') ||
                req.headers.get('x-forwarded-for') || undefined;

            const sourcePort = req.headers.get('x-forwarded-port') ?
                parseInt(req.headers.get('x-forwarded-port') as string, 10) :
                undefined;

            const handleTCPConnectionResponse = await appGuardService.connectionPromise(
                {
                    sourceIp: sourceIp,
                    sourcePort: sourcePort,
                    destinationIp: undefined,
                    destinationPort: undefined,
                    protocol: req.headers.get('x-forwarded-proto') || undefined,
                    token: authHandler.token()
                }
            );
            const handleHTTPRequestResponse = await appGuardService.firewallPromise(appGuardService.handleHttpRequest(
                {
                    originalUrl: req.nextUrl.pathname,
                    // @ts-ignore
                    headers: req.headers as Record<string, string>,
                    method: req.method,
                    // @ts-ignore
                    body: req.body,
                    // @ts-ignore
                    query: req.nextUrl.searchParams as Record<string, string>,
                    tcpInfo: handleTCPConnectionResponse.tcpInfo,
                    token: authHandler.token()
                }
            ));

            // console.log(
            //   `Appguard Request Decision- ${FirewallPolicy.ALLOW ? 'Allow' : 'Deny'} `
            // );

            const policy = handleHTTPRequestResponse.policy;
            if (policy === FirewallPolicy.DENY) {
                return NextResponse.json(
                    {success: false, message: 'Unauthorized'},
                    {status: 401}
                );
            } else {
                return await handleOutgoingResponse(handleTCPConnectionResponse.tcpInfo as AppGuardTcpInfo);
            }
        } catch (error) {
            console.error(error);
            return NextResponse.json(
                {success: false, message: 'Internal server error'},
                {status: 500}
            );
        }
    };

    return handleIncomingRequest;
};
