export interface LocationResponse {
  status: string,
  country: string,
  countryCode: string,
  region: string,
  regionName: string,
  city: string,
  lat: number,
  lon: number,
  timezone: string,
  isp: string,
  org: string,
  as: string,
  query: string
}

export interface WeatherResponse {
  weather: {
    main: string,
    description: string
  },
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  }
}

export interface ForecastResponse {
  list: [WeatherResponse]
}
