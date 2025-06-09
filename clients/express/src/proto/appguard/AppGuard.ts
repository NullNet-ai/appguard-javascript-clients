// Original file: proto/appguard.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AppGuardFirewall as _appguard_AppGuardFirewall, AppGuardFirewall__Output as _appguard_AppGuardFirewall__Output } from '../appguard/AppGuardFirewall';
import type { AppGuardHttpRequest as _appguard_AppGuardHttpRequest, AppGuardHttpRequest__Output as _appguard_AppGuardHttpRequest__Output } from '../appguard/AppGuardHttpRequest';
import type { AppGuardHttpResponse as _appguard_AppGuardHttpResponse, AppGuardHttpResponse__Output as _appguard_AppGuardHttpResponse__Output } from '../appguard/AppGuardHttpResponse';
import type { AppGuardResponse as _appguard_AppGuardResponse, AppGuardResponse__Output as _appguard_AppGuardResponse__Output } from '../appguard/AppGuardResponse';
import type { AppGuardSmtpRequest as _appguard_AppGuardSmtpRequest, AppGuardSmtpRequest__Output as _appguard_AppGuardSmtpRequest__Output } from '../appguard/AppGuardSmtpRequest';
import type { AppGuardSmtpResponse as _appguard_AppGuardSmtpResponse, AppGuardSmtpResponse__Output as _appguard_AppGuardSmtpResponse__Output } from '../appguard/AppGuardSmtpResponse';
import type { AppGuardTcpConnection as _appguard_AppGuardTcpConnection, AppGuardTcpConnection__Output as _appguard_AppGuardTcpConnection__Output } from '../appguard/AppGuardTcpConnection';
import type { AppGuardTcpResponse as _appguard_AppGuardTcpResponse, AppGuardTcpResponse__Output as _appguard_AppGuardTcpResponse__Output } from '../appguard/AppGuardTcpResponse';
import type { Empty as _appguard_Empty, Empty__Output as _appguard_Empty__Output } from '../appguard/Empty';
import type { HeartbeatRequest as _appguard_HeartbeatRequest, HeartbeatRequest__Output as _appguard_HeartbeatRequest__Output } from '../appguard/HeartbeatRequest';
import type { HeartbeatResponse as _appguard_HeartbeatResponse, HeartbeatResponse__Output as _appguard_HeartbeatResponse__Output } from '../appguard/HeartbeatResponse';

export interface AppGuardClient extends grpc.Client {
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
  
  Heartbeat(argument: _appguard_HeartbeatRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_appguard_HeartbeatResponse__Output>;
  Heartbeat(argument: _appguard_HeartbeatRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_appguard_HeartbeatResponse__Output>;
  heartbeat(argument: _appguard_HeartbeatRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_appguard_HeartbeatResponse__Output>;
  heartbeat(argument: _appguard_HeartbeatRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_appguard_HeartbeatResponse__Output>;
  
  UpdateFirewall(argument: _appguard_AppGuardFirewall, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  UpdateFirewall(argument: _appguard_AppGuardFirewall, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  UpdateFirewall(argument: _appguard_AppGuardFirewall, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  UpdateFirewall(argument: _appguard_AppGuardFirewall, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  updateFirewall(argument: _appguard_AppGuardFirewall, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  updateFirewall(argument: _appguard_AppGuardFirewall, metadata: grpc.Metadata, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  updateFirewall(argument: _appguard_AppGuardFirewall, options: grpc.CallOptions, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  updateFirewall(argument: _appguard_AppGuardFirewall, callback: grpc.requestCallback<_appguard_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface AppGuardHandlers extends grpc.UntypedServiceImplementation {
  HandleHttpRequest: grpc.handleUnaryCall<_appguard_AppGuardHttpRequest__Output, _appguard_AppGuardResponse>;
  
  HandleHttpResponse: grpc.handleUnaryCall<_appguard_AppGuardHttpResponse__Output, _appguard_AppGuardResponse>;
  
  HandleSmtpRequest: grpc.handleUnaryCall<_appguard_AppGuardSmtpRequest__Output, _appguard_AppGuardResponse>;
  
  HandleSmtpResponse: grpc.handleUnaryCall<_appguard_AppGuardSmtpResponse__Output, _appguard_AppGuardResponse>;
  
  HandleTcpConnection: grpc.handleUnaryCall<_appguard_AppGuardTcpConnection__Output, _appguard_AppGuardTcpResponse>;
  
  Heartbeat: grpc.handleServerStreamingCall<_appguard_HeartbeatRequest__Output, _appguard_HeartbeatResponse>;
  
  UpdateFirewall: grpc.handleUnaryCall<_appguard_AppGuardFirewall__Output, _appguard_Empty>;
  
}

export interface AppGuardDefinition extends grpc.ServiceDefinition {
  HandleHttpRequest: MethodDefinition<_appguard_AppGuardHttpRequest, _appguard_AppGuardResponse, _appguard_AppGuardHttpRequest__Output, _appguard_AppGuardResponse__Output>
  HandleHttpResponse: MethodDefinition<_appguard_AppGuardHttpResponse, _appguard_AppGuardResponse, _appguard_AppGuardHttpResponse__Output, _appguard_AppGuardResponse__Output>
  HandleSmtpRequest: MethodDefinition<_appguard_AppGuardSmtpRequest, _appguard_AppGuardResponse, _appguard_AppGuardSmtpRequest__Output, _appguard_AppGuardResponse__Output>
  HandleSmtpResponse: MethodDefinition<_appguard_AppGuardSmtpResponse, _appguard_AppGuardResponse, _appguard_AppGuardSmtpResponse__Output, _appguard_AppGuardResponse__Output>
  HandleTcpConnection: MethodDefinition<_appguard_AppGuardTcpConnection, _appguard_AppGuardTcpResponse, _appguard_AppGuardTcpConnection__Output, _appguard_AppGuardTcpResponse__Output>
  Heartbeat: MethodDefinition<_appguard_HeartbeatRequest, _appguard_HeartbeatResponse, _appguard_HeartbeatRequest__Output, _appguard_HeartbeatResponse__Output>
  UpdateFirewall: MethodDefinition<_appguard_AppGuardFirewall, _appguard_Empty, _appguard_AppGuardFirewall__Output, _appguard_Empty__Output>
}
