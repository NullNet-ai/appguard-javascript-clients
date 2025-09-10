import {FirewallPolicy} from "./proto/appguard_commands/FirewallPolicy";

export class CacheKey {
    originalUrl: string;
    method: string;
    body: string;
    sourceIp: string;
    userAgent: string;
    query: Record<string, string>;
}

export class Cache {
    private active: boolean;
    private cache: Map<CacheKey, FirewallPolicy>;

    constructor(active: boolean) {
        this.active = active;
        this.cache = new Map<CacheKey, FirewallPolicy>();
    }

    get(key: CacheKey): FirewallPolicy | undefined {
        if (this.active) {
            return this.cache.get(key);
        } else {
            return undefined;
        }
    }

    insert(key: CacheKey, policy: FirewallPolicy) {
        if (this.active) {
            this.cache.set(key, policy);
        }
    }
}