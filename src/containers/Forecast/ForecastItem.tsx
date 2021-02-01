import React from "react";
import { WeatherResponse } from "../../types/index";
import {
  formatTemperature as format,
  getDayOfWeek,
} from "../../utils/weather.utils";
import ForecastItemContainer from "./ForecastItemContainer";

export interface ForecastItemProps {
  weatherData: WeatherResponse;
}

const ForecastItem: React.FC<ForecastItemProps> = ({ weatherData }) => {
  return (
    <ForecastItemContainer>
      <h2>{getDayOfWeek(weatherData.dt)}</h2>
      <div className="temp">
        {format(weatherData?.main.temp)}
        <span className="degrees">°C</span>
      </div>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
      />
      <div className="description">{weatherData.weather[0].main}</div>
      <div className="info">
        <div>Feels like {format(weatherData.main.feels_like)}°C</div>
        <div>Humidity: {weatherData?.main.humidity}%</div>
        <div>Wind: {weatherData?.wind.speed} m/s</div>
      </div>
    </ForecastItemContainer>
  );
};

export default ForecastItem;
