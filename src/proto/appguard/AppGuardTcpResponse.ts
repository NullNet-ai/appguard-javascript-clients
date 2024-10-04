// Original file: appguard-protobuf/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardTcpResponse {
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  'reqId'?: (number);
  'error'?: (string);
  '_error'?: "error";
}

export interface AppGuardTcpResponse__Output {
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
  'reqId'?: (number);
  'error'?: (string);
}
