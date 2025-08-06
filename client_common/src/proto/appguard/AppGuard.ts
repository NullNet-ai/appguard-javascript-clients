// Original file: proto/appguard.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AppGuardHttpRequest as _appguard_AppGuardHttpRequest, AppGuardHttpRequest__Output as _appguard_AppGuardHttpRequest__Output } from '../appguard/AppGuardHttpRequest';
import type { AppGuardHttpResponse as _appguard_AppGuardHttpResponse, AppGuardHttpResponse__Output as _appguard_AppGuardHttpResponse__Output } from '../appguard/AppGuardHttpResponse';
import type { AppGuardResponse as _appguard_AppGuardResponse, AppGuardResponse__Output as _appguard_AppGuardResponse__Output } from '../appguard/AppGuardResponse';
import type { AppGuardSmtpRequest as _appguard_AppGuardSmtpRequest, AppGuardSmtpRequest__Output as _appguard_AppGuardSmtpRequest__Output } from '../appguard/AppGuardSmtpRequest';
import type { AppGuardSmtpResponse as _appguard_AppGuardSmtpResponse, AppGuardSmtpResponse__Output as _appguard_AppGuardSmtpResponse__Output } from '../appguard/AppGuardSmtpResponse';
import type { AppGuardTcpConnection as _appguard_AppGuardTcpConnection, AppGuardTcpConnection__Output as _appguard_AppGuardTcpConnection__Output } from '../appguard/AppGuardTcpConnection';
import type { AppGuardTcpResponse as _appguard_AppGuardTcpResponse, AppGuardTcpResponse__Output as _appguard_AppGuardTcpResponse__Output } from '../appguard/AppGuardTcpResponse';
import type { ClientMessage as _appguard_commands_ClientMessage, ClientMessage__Output as _appguard_commands_ClientMessage__Output } from '../appguard_commands/ClientMessage';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { FirewallDefaults as _appguard_commands_FirewallDefaults, FirewallDefaults__Output as _appguard_commands_FirewallDefaults__Output } from '../appguard_commands/FirewallDefaults';
import type { Logs as _appguard_Logs, Logs__Output as _appguard_Logs__Output } from '../appguard/Logs';
import type { ServerMessage as _appguard_commands_ServerMessage, ServerMessage__Output as _appguard_commands_ServerMessage__Output } from '../appguard_commands/ServerMessage';
import type { Token as _appguard_Token, Token__Output as _appguard_Token__Output } from '../appguard/Token';

export interface AppGuardClient extends grpc.Client {
  ControlChannel(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_appguard_commands_ClientMessage, _appguard_commands_ServerMessage__Output>;
  ControlChannel(options?: grpc.CallOptions): grpc.ClientDuplexStream<_appguard_commands_ClientMessage, _appguard_commands_ServerMessage__Output>;
  controlChannel(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_appguard_commands_ClientMessage, _appguard_commands_ServerMessage__Output>;
  controlChannel(options?: grpc.CallOptions): grpc.ClientDuplexStream<_appguard_commands_ClientMessage, _appguard_commands_ServerMessage__Output>;
  
  FirewallDefaultsRequest(argument: _appguard_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  FirewallDefaultsRequest(argument: _appguard_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  FirewallDefaultsRequest(argument: _appguard_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  FirewallDefaultsRequest(argument: _appguard_Token, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  firewallDefaultsRequest(argument: _appguard_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  firewallDefaultsRequest(argument: _appguard_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  firewallDefaultsRequest(argument: _appguard_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  firewallDefaultsRequest(argument: _appguard_Token, callback: grpc.requestCallback<_appguard_commands_FirewallDefaults__Output>): grpc.ClientUnaryCall;
  
  HandleHttpRequest(argument: _appguard_AppGuardHttpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleHttpRequest(argument: _appguard_AppGuardHttpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleHttpRequest(argument: _appguard_AppGuardHttpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleHttpRequest(argument: _appguard_AppGuardHttpRequest, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpRequest(argument: _appguard_AppGuardHttpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpRequest(argument: _appguard_AppGuardHttpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpRequest(argument: _appguard_AppGuardHttpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpRequest(argument: _appguard_AppGuardHttpRequest, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  
  HandleHttpResponse(argument: _appguard_AppGuardHttpResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleHttpResponse(argument: _appguard_AppGuardHttpResponse, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleHttpResponse(argument: _appguard_AppGuardHttpResponse, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleHttpResponse(argument: _appguard_AppGuardHttpResponse, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpResponse(argument: _appguard_AppGuardHttpResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpResponse(argument: _appguard_AppGuardHttpResponse, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpResponse(argument: _appguard_AppGuardHttpResponse, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleHttpResponse(argument: _appguard_AppGuardHttpResponse, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  
  HandleLogs(argument: _appguard_Logs, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  HandleLogs(argument: _appguard_Logs, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  HandleLogs(argument: _appguard_Logs, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  HandleLogs(argument: _appguard_Logs, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  handleLogs(argument: _appguard_Logs, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  handleLogs(argument: _appguard_Logs, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  handleLogs(argument: _appguard_Logs, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  handleLogs(argument: _appguard_Logs, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  HandleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpRequest(argument: _appguard_AppGuardSmtpRequest, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  
  HandleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  HandleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  handleSmtpResponse(argument: _appguard_AppGuardSmtpResponse, callback: grpc.requestCallback<_appguard_AppGuardResponse__Output>): grpc.ClientUnaryCall;
  
  HandleTcpConnection(argument: _appguard_AppGuardTcpConnection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  HandleTcpConnection(argument: _appguard_AppGuardTcpConnection, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  HandleTcpConnection(argument: _appguard_AppGuardTcpConnection, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  HandleTcpConnection(argument: _appguard_AppGuardTcpConnection, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  handleTcpConnection(argument: _appguard_AppGuardTcpConnection, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  handleTcpConnection(argument: _appguard_AppGuardTcpConnection, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  handleTcpConnection(argument: _appguard_AppGuardTcpConnection, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  handleTcpConnection(argument: _appguard_AppGuardTcpConnection, callback: grpc.requestCallback<_appguard_AppGuardTcpResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AppGuardHandlers extends grpc.UntypedServiceImplementation {
  ControlChannel: grpc.handleBidiStreamingCall<_appguard_commands_ClientMessage__Output, _appguard_commands_ServerMessage>;
  
  FirewallDefaultsRequest: grpc.handleUnaryCall<_appguard_Token__Output, _appguard_commands_FirewallDefaults>;
  
  HandleHttpRequest: grpc.handleUnaryCall<_appguard_AppGuardHttpRequest__Output, _appguard_AppGuardResponse>;
  
  HandleHttpResponse: grpc.handleUnaryCall<_appguard_AppGuardHttpResponse__Output, _appguard_AppGuardResponse>;
  
  HandleLogs: grpc.handleUnaryCall<_appguard_Logs__Output, _google_protobuf_Empty>;
  
  HandleSmtpRequest: grpc.handleUnaryCall<_appguard_AppGuardSmtpRequest__Output, _appguard_AppGuardResponse>;
  
  HandleSmtpResponse: grpc.handleUnaryCall<_appguard_AppGuardSmtpResponse__Output, _appguard_AppGuardResponse>;
  
  HandleTcpConnection: grpc.handleUnaryCall<_appguard_AppGuardTcpConnection__Output, _appguard_AppGuardTcpResponse>;
  
}

export interface AppGuardDefinition extends grpc.ServiceDefinition {
  ControlChannel: MethodDefinition<_appguard_commands_ClientMessage, _appguard_commands_ServerMessage, _appguard_commands_ClientMessage__Output, _appguard_commands_ServerMessage__Output>
  FirewallDefaultsRequest: MethodDefinition<_appguard_Token, _appguard_commands_FirewallDefaults, _appguard_Token__Output, _appguard_commands_FirewallDefaults__Output>
  HandleHttpRequest: MethodDefinition<_appguard_AppGuardHttpRequest, _appguard_AppGuardResponse, _appguard_AppGuardHttpRequest__Output, _appguard_AppGuardResponse__Output>
  HandleHttpResponse: MethodDefinition<_appguard_AppGuardHttpResponse, _appguard_AppGuardResponse, _appguard_AppGuardHttpResponse__Output, _appguard_AppGuardResponse__Output>
  HandleLogs: MethodDefinition<_appguard_Logs, _google_protobuf_Empty, _appguard_Logs__Output, _google_protobuf_Empty__Output>
  HandleSmtpRequest: MethodDefinition<_appguard_AppGuardSmtpRequest, _appguard_AppGuardResponse, _appguard_AppGuardSmtpRequest__Output, _appguard_AppGuardResponse__Output>
  HandleSmtpResponse: MethodDefinition<_appguard_AppGuardSmtpResponse, _appguard_AppGuardResponse, _appguard_AppGuardSmtpResponse__Output, _appguard_AppGuardResponse__Output>
  HandleTcpConnection: MethodDefinition<_appguard_AppGuardTcpConnection, _appguard_AppGuardTcpResponse, _appguard_AppGuardTcpConnection__Output, _appguard_AppGuardTcpResponse__Output>
}
