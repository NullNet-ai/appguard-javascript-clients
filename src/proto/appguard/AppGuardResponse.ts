// Original file: proto/appguard.proto

import type { FirewallPolicy as _appguard_FirewallPolicy } from '../appguard/FirewallPolicy';

export interface AppGuardResponse {
  'reqId'?: (number);
  'policy'?: (_appguard_FirewallPolicy | keyof typeof _appguard_FirewallPolicy);
  'error'?: (string);
  '_reqId'?: "reqId";
  '_error'?: "error";
}

export interface AppGuardResponse__Output {
  'reqId'?: (number);
  'policy'?: (_appguard_FirewallPolicy);
  'error'?: (string);
}
