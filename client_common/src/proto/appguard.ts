import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AppGuardClient as _appguard_AppGuardClient, AppGuardDefinition as _appguard_AppGuardDefinition } from './appguard/AppGuard';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  appguard: {
    AppGuard: SubtypeConstructor<typeof grpc.Client, _appguard_AppGuardClient> & { service: _appguard_AppGuardDefinition }
    AppGuardHttpRequest: MessageTypeDefinition
    AppGuardHttpResponse: MessageTypeDefinition
    AppGuardIpInfo: MessageTypeDefinition
    AppGuardResponse: MessageTypeDefinition
    AppGuardSmtpRequest: MessageTypeDefinition
    AppGuardSmtpResponse: MessageTypeDefinition
    AppGuardTcpConnection: MessageTypeDefinition
    AppGuardTcpInfo: MessageTypeDefinition
    AppGuardTcpResponse: MessageTypeDefinition
    Log: MessageTypeDefinition
    Logs: MessageTypeDefinition
    Token: MessageTypeDefinition
  }
  appguard_commands: {
    Authentication: MessageTypeDefinition
    AuthenticationData: MessageTypeDefinition
    AuthorizationRequest: MessageTypeDefinition
    ClientMessage: MessageTypeDefinition
    FirewallDefaults: MessageTypeDefinition
    FirewallPolicy: EnumTypeDefinition
    ServerMessage: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

