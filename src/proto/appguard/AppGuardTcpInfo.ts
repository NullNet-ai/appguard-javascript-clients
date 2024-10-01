// Original file: proto/appguard.proto

import type { AppGuardTcpConnection as _appguard_AppGuardTcpConnection, AppGuardTcpConnection__Output as _appguard_AppGuardTcpConnection__Output } from '../appguard/AppGuardTcpConnection';
import type { AppGuardIpInfo as _appguard_AppGuardIpInfo, AppGuardIpInfo__Output as _appguard_AppGuardIpInfo__Output } from '../appguard/AppGuardIpInfo';

export interface AppGuardTcpInfo {
  'connection'?: (_appguard_AppGuardTcpConnection | null);
  'ipInfo'?: (_appguard_AppGuardIpInfo | null);
}

export interface AppGuardTcpInfo__Output {
  'connection'?: (_appguard_AppGuardTcpConnection__Output);
  'ipInfo'?: (_appguard_AppGuardIpInfo__Output);
}
