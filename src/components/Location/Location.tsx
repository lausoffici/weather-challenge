import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { LocationResponse } from '../../types/index';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

const Location: React.FC = () => {
  const { data } = useFetch<LocationResponse>('http://ip-api.com/json');

  return (
    <CurrentWeather locationData={data} />
  );
};

export default Location;
