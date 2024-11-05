// Original file: appguard-protobuf/appguard.proto

import type { AppGuardGenericVal as _appguard_AppGuardGenericVal, AppGuardGenericVal__Output as _appguard_AppGuardGenericVal__Output } from '../appguard/AppGuardGenericVal';
import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardHttpResponse {
  'code'?: (number);
  'headers'?: ({[key: string]: _appguard_AppGuardGenericVal});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
}

export interface AppGuardHttpResponse__Output {
  'code'?: (number);
  'headers'?: ({[key: string]: _appguard_AppGuardGenericVal__Output});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
