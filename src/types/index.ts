export interface LocationResponse {
  status: string,
  country: string,
  countryCode: string,
  region: string,
  regionName: string,
  city: string,
  lat?: number,
  lon?: number,
  timezone: string,
  isp: string,
  org: string,
  as: string,
  query: string
}
