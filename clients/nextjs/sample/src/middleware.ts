import type {NextRequest} from 'next/server'
import {AppGuardConfig, createAppGuardMiddleware, FirewallPolicy} from "../../src";

const appGuardConfig: AppGuardConfig = {
    host: 'localhost',
    port: 50051,
    tls: false,
    defaultPolicy: FirewallPolicy.ALLOW,
    timeout: 1_000,
    firewall: '[{"policy": "deny", "infix_tokens": [{"type": "predicate", "condition": "contains", "http_request_url": [".php", ".env"]}]}]',
}

let appGuardMiddleware = await createAppGuardMiddleware(appGuardConfig);

export default async function middleware(request: NextRequest) {
    return await appGuardMiddleware(request);
}

export const config = {
    // allow Node.js runtime for middleware: https://nextjs.org/blog/next-15-2#nodejs-middleware-experimental
    // this also requires next@canary: https://nextjs.org/docs/messages/ppr-preview
    runtime: 'nodejs',
    // This is to fix the following error:
    // Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime
    // Learn More: https://nextjs.org/docs/messages/edge-dynamic-code-evaluation
    // unstable_allowDynamic: [
    //     '**/node_modules/**',
    // ],
    // matches all paths by default
    // matcher: '/about/:path*',
};


// the NextRequest object is in the following format:
// {
//     cookies: RequestCookies {"_ga_H233XSGNTM":{"name":"_ga_H233XSGNTM","value":"GS2.1.s1748942027$o1$g1$t1748944647$j60$l0$h0"},"_ga":{"name":"_ga","value":"GA1.1.1900015703.1748942027"},"sidebar_state":{"name":"sidebar_state","value":"true"},"screen-type":{"name":"screen-type","value":"xl"},"Rustrover-c68afc14":{"name":"Rustrover-c68afc14","value":"05f095b2-b15a-498a-81a6-66f288f56afe"},"Rustrover-c68afc12":{"name":"Rustrover-c68afc12","value":"913f8ffa-cd38-485c-b0ea-419bf70090dc"},"Rustrover-c68af853":{"name":"Rustrover-c68af853","value":"0645d1e3-7a64-48fd-98b7-6a452a3605aa"}},
//     nextUrl: {
//         href: 'http://localhost:3000/',
//             origin: 'http://localhost:3000',
//             protocol: 'http:',
//             username: '',
//             password: '',
//             host: 'localhost:3000',
//             hostname: 'localhost',
//             port: '3000',
//             pathname: '/',
//             search: '',
//             searchParams: URLSearchParams {  },
//         hash: ''
//     },
//     url: 'http://localhost:3000/',
//         bodyUsed: false,
//     cache: 'default',
//     credentials: 'same-origin',
//     destination: '',
//     headers: {
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
//     accept-encoding: 'gzip, deflate',
//     accept-language: 'en-GB,en;q=0.9',
//         connection: 'keep-alive',
//         cookie: '_ga_H233XSGNTM=GS2.1.s1748942027$o1$g1$t1748944647$j60$l0$h0; _ga=GA1.1.1900015703.1748942027; sidebar_state=true; screen-type=xl; Rustrover-c68afc14=05f095b2-b15a-498a-81a6-66f288f56afe; Rustrover-c68afc12=913f8ffa-cd38-485c-b0ea-419bf70090dc; Rustrover-c68af853=0645d1e3-7a64-48fd-98b7-6a452a3605aa',
//         host: 'localhost:3000',
//     sec-fetch-dest: 'document',
//     sec-fetch-mode: 'navigate',
//     sec-fetch-site: 'none',
//     upgrade-insecure-requests: '1',
//     user-agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15',
//     x-forwarded-for: '::1',
//     x-forwarded-host: 'localhost:3000',
//     x-forwarded-port: '3000',
//     x-forwarded-proto: 'http'
// },
//     integrity: '',
//         keepalive: false,
//     method: 'GET',
//     mode: 'cors',
//     redirect: 'follow',
//     referrer: 'about:client',
//     referrerPolicy: '',
//     signal: AbortSignal {
//     [Symbol(kEvents)]: SafeMap(0) {},
//     [Symbol(events.maxEventTargetListeners)]: 10,
//         [Symbol(events.maxEventTargetListenersWarned)]: false,
//         [Symbol(kHandlers)]: SafeMap(0) {},
//     [Symbol(kAborted)]: false,
//         [Symbol(kReason)]: undefined,
//         [Symbol(kComposite)]: false
// }
// }
