import React from 'react';
import { ForecastResponse } from '../../types/index';
import { getDailyForecast } from '../../utils/weather.utils';
import Card from '../Card/Card';
import ForecastContainer from './ForecastContainer';
import ForecastItem from './ForecastItem';

export type ForecastProps = {
  forecastData?: ForecastResponse
};

const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {
  return (
    <Card className="flex-grow-1">
      <ForecastContainer>
        <h2>Daily Forecast 5 days</h2>
        <div className="content">
          {forecastData && getDailyForecast(forecastData).list.map((item, index) => (
            <ForecastItem key={index} weatherData={item} />
          ))}
        </div>
      </ForecastContainer>
    </Card>
  );
};

export default Forecast;
