# appguard-nextjs

[AppGuard](https://github.com/NullNet-ai/appguard-server) client for [Next.js](https://nextjs.org).

### Installation

Add the following to your `package.json`:

```json
"dependencies": {
    "@nullnet/appguard-nextjs": "^0.1.0",
    "next": "^15.4.0-canary.67"
}
```

Be aware that a canary version of Next.js is required to use the AppGuard middleware.

### Usage

In your `middleware.ts` file, you can use the AppGuard middleware as follows:

```typescript
import type {NextRequest} from 'next/server'
import {createAppGuardMiddleware} from "../../src";

let appGuardMiddleware = await createAppGuardMiddleware();

export default async function middleware(request: NextRequest) {
    return await appGuardMiddleware(request);
}

export const config = {
    // allow Node.js runtime for middleware: https://nextjs.org/blog/next-15-2#nodejs-middleware-experimental
    // this also requires next@canary: https://nextjs.org/docs/messages/ppr-preview
    runtime: 'nodejs',
};
```

A complete working example can be found [here](https://github.com/NullNet-ai/appguard-javascript-clients/blob/main/clients/nextjs/sample/src/middleware.ts).

### Environment variables

The following environment variables must be set for the client to work:
- `CONTROL_SERVICE_ADDR`: AppGuard server's IP address
- `CONTROL_SERVICE_PORT`: AppGuard server's port
- `INSTALLATION_CODE`: installation code for this client
