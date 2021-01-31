import React from 'react';
import { ForecastResponse } from '../../types/index';

export type ForecastProps = {
  forecastData?: ForecastResponse
};

const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {
  return (
    <div />
  );
};

export default Forecast;
