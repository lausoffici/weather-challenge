import React from 'react';
import { WeatherResponse } from '../../types/index';
import { formatTemperature as format, getDayOfWeek } from '../../utils/weather.utils';
import ForecastItemContainer from './ForecastItemContainer';

export type ForecastItemProps = {
  weatherData: WeatherResponse
};

const ForecastItem: React.FC<ForecastItemProps> = ({ weatherData }) => {
  return (
    <ForecastItemContainer>
      <h1>{getDayOfWeek(weatherData.dt)}</h1>
      <div className="temp">{format(weatherData.main.temp)}°C</div>
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
