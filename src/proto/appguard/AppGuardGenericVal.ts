// Original file: appguard-protobuf/appguard.proto

import type { StringVec as _appguard_StringVec, StringVec__Output as _appguard_StringVec__Output } from '../appguard/StringVec';
import type { Long } from '@grpc/proto-loader';

export interface AppGuardGenericVal {
  'stringVal'?: (string);
  'stringVecVal'?: (_appguard_StringVec | null);
  'intVal'?: (number | string | Long);
  'floatVal'?: (number | string);
  'value'?: "stringVal"|"stringVecVal"|"intVal"|"floatVal";
}

export interface AppGuardGenericVal__Output {
  'stringVal'?: (string);
  'stringVecVal'?: (_appguard_StringVec__Output);
  'intVal'?: (Long);
  'floatVal'?: (number);
}
