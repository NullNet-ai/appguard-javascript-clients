// Original file: appguard-protobuf/genericval.proto

import type { StringVec as _genericval_StringVec, StringVec__Output as _genericval_StringVec__Output } from '../genericval/StringVec';
import type { Long } from '@grpc/proto-loader';

export interface AppGuardGenericVal {
  'stringVal'?: (string);
  'stringVecVal'?: (_genericval_StringVec | null);
  'intVal'?: (number | string | Long);
  'floatVal'?: (number | string);
  'value'?: "stringVal"|"stringVecVal"|"intVal"|"floatVal";
}

export interface AppGuardGenericVal__Output {
  'stringVal'?: (string);
  'stringVecVal'?: (_genericval_StringVec__Output);
  'intVal'?: (Long);
  'floatVal'?: (number);
}
