import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { LocationResponse } from '../../types/index';

export type CurrentWeatherProps = {
  locationData?: LocationResponse
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ locationData }) => {
  const url = `${process.env.WEATHER_API_URL}&lat=${locationData?.lat}&lon=${locationData?.lon}`;
  const { data, get } = useFetch(url, false);

  useEffect(() => {
    if (locationData) {
      get();
    }
  }, [locationData, get]);

  return (
    <div>
    </div>
  );
};

export default CurrentWeather;
