// Original file: proto/appguard.proto


export interface AppGuardIpInfo {
  'ip'?: (string);
  'country'?: (string);
  'asn'?: (string);
  'org'?: (string);
  'blacklist'?: (number);
  '_country'?: "country";
  '_asn'?: "asn";
  '_org'?: "org";
}

export interface AppGuardIpInfo__Output {
  'ip'?: (string);
  'country'?: (string);
  'asn'?: (string);
  'org'?: (string);
  'blacklist'?: (number);
}
