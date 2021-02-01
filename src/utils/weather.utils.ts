import { ForecastResponse } from "../types";

export const formatTemperature = (temp?: number): number | undefined => {
  return temp && Math.round(temp);
};

export const getDayOfWeek = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "long",
  });
};

export const getDailyForecast = (
  forecast: ForecastResponse
): ForecastResponse => {
  const dailyForecast: ForecastResponse = { list: [] };
  let i;

  for (i = 0; i < forecast.list.length; i += 8) {
    dailyForecast.list.push(forecast.list[i]);
  }

  return dailyForecast;
};
