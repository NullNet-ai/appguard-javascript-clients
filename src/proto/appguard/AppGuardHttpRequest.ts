// Original file: proto/appguard.proto

import type { AppGuardGenericVal as _appguard_AppGuardGenericVal, AppGuardGenericVal__Output as _appguard_AppGuardGenericVal__Output } from '../appguard/AppGuardGenericVal';
import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardHttpRequest {
  'originalUrl'?: (string);
  'headers'?: ({[key: string]: _appguard_AppGuardGenericVal});
  'method'?: (string);
  'body'?: (string);
  'query'?: ({[key: string]: _appguard_AppGuardGenericVal});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  '_body'?: "body";
}

export interface AppGuardHttpRequest__Output {
  'originalUrl'?: (string);
  'headers'?: ({[key: string]: _appguard_AppGuardGenericVal__Output});
  'method'?: (string);
  'body'?: (string);
  'query'?: ({[key: string]: _appguard_AppGuardGenericVal__Output});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
