import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { LocationResponse } from '../../types/index';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

const Location: React.FC = () => {
  const { data } = useFetch<LocationResponse>(process.env.LOCATION_API_URL!);

  return (
    <CurrentWeather locationData={data} />
  );
};

export default Location;
