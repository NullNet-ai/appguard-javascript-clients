import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// allow Node.js runtime for middleware: https://nextjs.org/blog/next-15-2#nodejs-middleware-experimental
// this also requires next@canary: https://nextjs.org/docs/messages/ppr-preview
module.exports = {
    experimental: {
        nodeMiddleware: true,
    },
};

export default nextConfig;
