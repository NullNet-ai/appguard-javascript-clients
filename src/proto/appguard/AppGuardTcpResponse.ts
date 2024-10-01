// Original file: proto/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardTcpResponse {
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  'error'?: (string);
  '_error'?: "error";
}

export interface AppGuardTcpResponse__Output {
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
  'error'?: (string);
}
