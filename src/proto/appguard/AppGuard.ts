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
  
}

export interface AppGuardHandlers extends grpc.UntypedServiceImplementation {
  HandleHttpRequest: grpc.handleUnaryCall<_appguard_AppGuardHttpRequest__Output, _appguard_AppGuardResponse>;
  
  HandleHttpResponse: grpc.handleUnaryCall<_appguard_AppGuardHttpResponse__Output, _appguard_AppGuardResponse>;
  
  HandleSmtpRequest: grpc.handleUnaryCall<_appguard_AppGuardSmtpRequest__Output, _appguard_AppGuardResponse>;
  
  HandleSmtpResponse: grpc.handleUnaryCall<_appguard_AppGuardSmtpResponse__Output, _appguard_AppGuardResponse>;
  
  HandleTcpConnection: grpc.handleUnaryCall<_appguard_AppGuardTcpConnection__Output, _appguard_AppGuardTcpResponse>;
  
}

export interface AppGuardDefinition extends grpc.ServiceDefinition {
  HandleHttpRequest: MethodDefinition<_appguard_AppGuardHttpRequest, _appguard_AppGuardResponse, _appguard_AppGuardHttpRequest__Output, _appguard_AppGuardResponse__Output>
  HandleHttpResponse: MethodDefinition<_appguard_AppGuardHttpResponse, _appguard_AppGuardResponse, _appguard_AppGuardHttpResponse__Output, _appguard_AppGuardResponse__Output>
  HandleSmtpRequest: MethodDefinition<_appguard_AppGuardSmtpRequest, _appguard_AppGuardResponse, _appguard_AppGuardSmtpRequest__Output, _appguard_AppGuardResponse__Output>
  HandleSmtpResponse: MethodDefinition<_appguard_AppGuardSmtpResponse, _appguard_AppGuardResponse, _appguard_AppGuardSmtpResponse__Output, _appguard_AppGuardResponse__Output>
  HandleTcpConnection: MethodDefinition<_appguard_AppGuardTcpConnection, _appguard_AppGuardTcpResponse, _appguard_AppGuardTcpConnection__Output, _appguard_AppGuardTcpResponse__Output>
}
