// Original file: appguard-protobuf/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardSmtpResponse {
  'code'?: (number);
  'reqId'?: (number);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  '_code'?: "code";
  '_reqId'?: "reqId";
}

export interface AppGuardSmtpResponse__Output {
  'code'?: (number);
  'reqId'?: (number);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
