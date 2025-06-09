// Original file: proto/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardHttpRequest {
  'token'?: (string);
  'originalUrl'?: (string);
  'headers'?: ({[key: string]: string});
  'method'?: (string);
  'body'?: (string);
  'query'?: ({[key: string]: string});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  '_body'?: "body";
}

export interface AppGuardHttpRequest__Output {
  'token'?: (string);
  'originalUrl'?: (string);
  'headers'?: ({[key: string]: string});
  'method'?: (string);
  'body'?: (string);
  'query'?: ({[key: string]: string});
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
