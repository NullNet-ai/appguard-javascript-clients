// Original file: appguard-protobuf/appguard.proto

import type { AppGuardTcpInfo as _appguard_AppGuardTcpInfo, AppGuardTcpInfo__Output as _appguard_AppGuardTcpInfo__Output } from '../appguard/AppGuardTcpInfo';

export interface AppGuardSmtpRequest {
  'headers'?: ({[key: string]: string});
  'body'?: (string);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo | null);
  '_body'?: "body";
}

export interface AppGuardSmtpRequest__Output {
  'headers'?: ({[key: string]: string});
  'body'?: (string);
  'tcpInfo'?: (_appguard_AppGuardTcpInfo__Output);
}
