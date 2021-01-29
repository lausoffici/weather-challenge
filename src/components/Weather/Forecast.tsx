import React from 'react';
import { ForecastResponse } from '../../types/index';

export type ForecastProps = {
  data?: ForecastResponse
};

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  console.log(data);
  return (
    <div />
  );
};

export default Forecast;
