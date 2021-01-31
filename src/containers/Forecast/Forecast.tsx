import React from 'react';
import { ForecastResponse } from '../../types/index';
import { getDailyForecast } from '../../utils/weather.utils';
import ForecastContainer from './ForecastContainer';
import ForecastItem from './ForecastItem';

export type ForecastProps = {
  forecastData?: ForecastResponse
};

const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {
  return (
    <div className="card flex-grow-1">
      <ForecastContainer>
        <h1>Daily Forecast 5 days</h1>
        <div className="content">
          {forecastData && getDailyForecast(forecastData).list.map((item, index) => (
            <ForecastItem key={index} weatherData={item} />
          ))}
        </div>
      </ForecastContainer>
    </div>
  );
};

export default Forecast;
