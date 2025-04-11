// Original file: proto/appguard.proto

import type { DeviceStatus as _appguard_DeviceStatus } from '../appguard/DeviceStatus';

export interface HeartbeatResponse {
  'token'?: (string);
  'status'?: (_appguard_DeviceStatus | keyof typeof _appguard_DeviceStatus);
  'remoteShellEnabled'?: (boolean);
  'remoteUiEnabled'?: (boolean);
  'isMonitoringEnabled'?: (boolean);
}

export interface HeartbeatResponse__Output {
  'token'?: (string);
  'status'?: (_appguard_DeviceStatus);
  'remoteShellEnabled'?: (boolean);
  'remoteUiEnabled'?: (boolean);
  'isMonitoringEnabled'?: (boolean);
}
