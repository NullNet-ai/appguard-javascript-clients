// Original file: proto/appguard.proto


export interface AppGuardIpInfo {
  'ip'?: (string);
  'country'?: (string);
  'asn'?: (string);
  'org'?: (string);
  'continentCode'?: (string);
  'city'?: (string);
  'region'?: (string);
  'postal'?: (string);
  'timezone'?: (string);
  'blacklist'?: (boolean);
  '_country'?: "country";
  '_asn'?: "asn";
  '_org'?: "org";
  '_continentCode'?: "continentCode";
  '_city'?: "city";
  '_region'?: "region";
  '_postal'?: "postal";
  '_timezone'?: "timezone";
}

export interface AppGuardIpInfo__Output {
  'ip'?: (string);
  'country'?: (string);
  'asn'?: (string);
  'org'?: (string);
  'continentCode'?: (string);
  'city'?: (string);
  'region'?: (string);
  'postal'?: (string);
  'timezone'?: (string);
  'blacklist'?: (boolean);
}
