// Original file: appguard-protobuf/appguard.proto


export interface AppGuardTcpConnection {
  'sourceIp'?: (string);
  'sourcePort'?: (number);
  'destinationIp'?: (string);
  'destinationPort'?: (number);
  'protocol'?: (string);
  '_sourceIp'?: "sourceIp";
  '_sourcePort'?: "sourcePort";
  '_destinationIp'?: "destinationIp";
  '_destinationPort'?: "destinationPort";
}

export interface AppGuardTcpConnection__Output {
  'sourceIp'?: (string);
  'sourcePort'?: (number);
  'destinationIp'?: (string);
  'destinationPort'?: (number);
  'protocol'?: (string);
}
