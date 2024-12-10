// Original file: appguard-protobuf/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardHttpResponse {
  'code'?: (number);
  'headers'?: ({[key: string]: string});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
}

export interface AppGuardHttpResponse__Output {
  'code'?: (number);
  'headers'?: ({[key: string]: string});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
