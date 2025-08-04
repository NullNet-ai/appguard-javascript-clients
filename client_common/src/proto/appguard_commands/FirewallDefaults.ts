// Original file: proto/commands.proto

import type { FirewallPolicy as _appguard_commands_FirewallPolicy } from '../appguard_commands/FirewallPolicy';

export interface FirewallDefaults {
  'timeout'?: (number);
  'policy'?: (_appguard_commands_FirewallPolicy | keyof typeof _appguard_commands_FirewallPolicy);
}

export interface FirewallDefaults__Output {
  'timeout'?: (number);
  'policy'?: (_appguard_commands_FirewallPolicy);
}
