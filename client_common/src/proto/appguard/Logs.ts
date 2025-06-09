// Original file: proto/appguard.proto

import type { Log as _appguard_Log, Log__Output as _appguard_Log__Output } from '../appguard/Log';

export interface Logs {
  'token'?: (string);
  'logs'?: (_appguard_Log)[];
}

export interface Logs__Output {
  'token'?: (string);
  'logs'?: (_appguard_Log__Output)[];
}
