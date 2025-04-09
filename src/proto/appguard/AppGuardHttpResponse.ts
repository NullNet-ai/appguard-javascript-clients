// Original file: proto/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardHttpResponse {
  'token'?: (string);
  'code'?: (number);
  'headers'?: ({[key: string]: string});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
}

export interface AppGuardHttpResponse__Output {
  'token'?: (string);
  'code'?: (number);
  'headers'?: ({[key: string]: string});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
