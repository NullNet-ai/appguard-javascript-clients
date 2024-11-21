// Original file: appguard-protobuf/appguard.proto

import type { AppGuardGenericVal as _genericval_AppGuardGenericVal, AppGuardGenericVal__Output as _genericval_AppGuardGenericVal__Output } from '../genericval/AppGuardGenericVal';
import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardSmtpRequest {
  'headers'?: ({[key: string]: _genericval_AppGuardGenericVal});
  'body'?: (string);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  '_body'?: "body";
}

export interface AppGuardSmtpRequest__Output {
  'headers'?: ({[key: string]: _genericval_AppGuardGenericVal__Output});
  'body'?: (string);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
