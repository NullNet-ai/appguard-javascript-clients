// Original file: proto/commands.proto

import type { AuthorizationRequest as _appguard_commands_AuthorizationRequest, AuthorizationRequest__Output as _appguard_commands_AuthorizationRequest__Output } from '../appguard_commands/AuthorizationRequest';
import type { Authentication as _appguard_commands_Authentication, Authentication__Output as _appguard_commands_Authentication__Output } from '../appguard_commands/Authentication';

export interface ClientMessage {
  'authorizationRequest'?: (_appguard_commands_AuthorizationRequest | null);
  'authentication'?: (_appguard_commands_Authentication | null);
  'message'?: "authorizationRequest"|"authentication";
}

export interface ClientMessage__Output {
  'authorizationRequest'?: (_appguard_commands_AuthorizationRequest__Output);
  'authentication'?: (_appguard_commands_Authentication__Output);
}
