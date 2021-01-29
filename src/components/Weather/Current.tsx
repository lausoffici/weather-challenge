import React from 'react';
import { WeatherResponse } from '../../types/index';

export type CurrentWeatherProps = {
  data?: WeatherResponse
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  console.log(data);
  return (
    <div />
  );
};

export default CurrentWeather;
