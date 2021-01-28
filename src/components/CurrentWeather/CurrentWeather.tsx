import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { LocationResponse } from '../../types/index';

export type CurrentWeatherProps = {
  locationData?: LocationResponse
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ locationData }) => {
  const { data, get } = useFetch(`http://api.openweathermap.org/data/2.5/weather?appid=699c25a797f6faeb1f3bf545c2fecdbf&units=metric&lat=${locationData?.lat}&lon=${locationData?.lon}`, false);

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
