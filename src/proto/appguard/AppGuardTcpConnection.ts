// Original file: proto/appguard.proto


export interface AppGuardTcpConnection {
  'token'?: (string);
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
  'token'?: (string);
  'sourceIp'?: (string);
  'sourcePort'?: (number);
  'destinationIp'?: (string);
  'destinationPort'?: (number);
  'protocol'?: (string);
}
