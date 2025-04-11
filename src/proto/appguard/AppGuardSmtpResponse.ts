// Original file: proto/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardSmtpResponse {
  'token'?: (string);
  'code'?: (number);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  '_code'?: "code";
}

export interface AppGuardSmtpResponse__Output {
  'token'?: (string);
  'code'?: (number);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
