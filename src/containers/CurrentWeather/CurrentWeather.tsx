import React from "react";
import { WeatherResponse } from "../../types/index";
import { formatTemperature as format } from "../../utils/weather.utils";
import CurrentWeatherStyles from "./CurrentWeatherStyles";

export interface CurrentWeatherProps {
  weatherData?: WeatherResponse;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  return (
    <div className="card">
      <CurrentWeatherStyles>
        <h1>Current weather</h1>
        <div className="content">
          <div className="main-info">
            <div className="city">
              {weatherData?.name}, {weatherData?.sys.country}
            </div>
            <div className="description">{weatherData?.weather[0].main}</div>
            <div className="temp">
              {format(weatherData?.main.temp)}
              <span className="degrees">°C</span>
            </div>
            <div className="feels-like">
              Feels like {format(weatherData?.main.feels_like)}°C
            </div>
          </div>
          <div className="secondary-info">
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
            />
            <div>Humidity: {weatherData?.main.humidity}%</div>
            <div>Wind: {weatherData?.wind.speed} m/s</div>
            <div>Pressure: {weatherData?.main.pressure} hPa</div>
          </div>
        </div>
      </CurrentWeatherStyles>
    </div>
  );
};

export default CurrentWeather;
