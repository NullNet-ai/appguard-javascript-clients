import {FirewallPolicy} from "./proto/appguard_commands/FirewallPolicy";

export class CacheKey {
    originalUrl: string;
    method: string;
    body: string;
    sourceIp: string;
    userAgent: string;
    query: Record<string, string>;
}