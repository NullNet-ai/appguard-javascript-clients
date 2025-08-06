// Original file: proto/commands.proto

import type { FirewallDefaults as _appguard_commands_FirewallDefaults, FirewallDefaults__Output as _appguard_commands_FirewallDefaults__Output } from '../appguard_commands/FirewallDefaults';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { AuthenticationData as _appguard_commands_AuthenticationData, AuthenticationData__Output as _appguard_commands_AuthenticationData__Output } from '../appguard_commands/AuthenticationData';

export interface ServerMessage {
  'updateTokenCommand'?: (string);
  'setFirewallDefaults'?: (_appguard_commands_FirewallDefaults | null);
  'heartbeat'?: (_google_protobuf_Empty | null);
  'deviceAuthorized'?: (_appguard_commands_AuthenticationData | null);
  'deviceDeauthorized'?: (_google_protobuf_Empty | null);
  'authorizationRejected'?: (_google_protobuf_Empty | null);
  'message'?: "updateTokenCommand"|"setFirewallDefaults"|"heartbeat"|"deviceAuthorized"|"deviceDeauthorized"|"authorizationRejected";
}

export interface ServerMessage__Output {
  'updateTokenCommand'?: (string);
  'setFirewallDefaults'?: (_appguard_commands_FirewallDefaults__Output);
  'heartbeat'?: (_google_protobuf_Empty__Output);
  'deviceAuthorized'?: (_appguard_commands_AuthenticationData__Output);
  'deviceDeauthorized'?: (_google_protobuf_Empty__Output);
  'authorizationRejected'?: (_google_protobuf_Empty__Output);
}
