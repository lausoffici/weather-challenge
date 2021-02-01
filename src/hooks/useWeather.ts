import { useEffect } from "react";
import { ForecastResponse, WeatherResponse } from "../types";
import { GetRequest, useFetch } from "./useFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UseWeatherResponse {
  currentWeatherData: WeatherResponse | undefined;
  forecastData: ForecastResponse | undefined;
  getCurrentWeatherData: GetRequest;
  getForecastData: GetRequest;
}

export const useWeather = (): UseWeatherResponse => {
  const {
    data: currentWeatherData,
    get: getCurrentWeatherData,
    status: status,
  } = useFetch<WeatherResponse>(process.env.WEATHER_API_URL || "", false);
  const {
    data: forecastData,
    get: getForecastData,
  } = useFetch<ForecastResponse>(process.env.FORECAST_API_URL || "", false);

  useEffect(() => {
    if (status === "error") {
      toast.error("😕 Sorry, we couldn't find that city");
    }
  }, [status]);

  return {
    currentWeatherData,
    forecastData,
    getCurrentWeatherData,
    getForecastData,
  };
};
