// Original file: appguard-protobuf/appguard.proto

import type { FirewallPolicy as _appguard_FirewallPolicy } from '../appguard/FirewallPolicy';

export interface AppGuardResponse {
  'policy'?: (_appguard_FirewallPolicy | keyof typeof _appguard_FirewallPolicy);
  'error'?: (string);
  '_error'?: "error";
}

export interface AppGuardResponse__Output {
  'policy'?: (_appguard_FirewallPolicy);
  'error'?: (string);
}
