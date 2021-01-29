import React, { FormEvent, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ForecastResponse, LocationResponse, WeatherResponse } from '../../types/index';
import CityPicker from '../CityPicker/CityPicker';
import Current from '../Weather/Current';
import Forecast from '../Weather/Forecast';

const Location: React.FC = () => {
  const [cityName, setCityName] = useState<string>('');

  const { data: locationData } = useFetch<LocationResponse>(process.env.LOCATION_API_URL || '');
  const { data: forecastData, get: getForecastData } = useFetch<ForecastResponse>(process.env.FORECAST_API_URL || '', false);
  const { data: currentWeatherData, get: getCurrentWeatherData } = useFetch<WeatherResponse>(process.env.WEATHER_API_URL || '', false);

  const handleCitySubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!locationData && !cityName) return;

    if (cityName) {
      const queryParams = `&q=${cityName}`;
      getCurrentWeatherData(queryParams);
      getForecastData(queryParams);
    } else {
      const queryParams = `&lat=${locationData?.lat}&lon=${locationData?.lon}`;
      getCurrentWeatherData(queryParams);
      getForecastData(queryParams);
    }
  }

  return (
    <>
      <CityPicker handleCitySubmit={handleCitySubmit} cityName={cityName} setCityName={setCityName} />
      { currentWeatherData && <Current data={currentWeatherData} /> }
      { forecastData && <Forecast data={forecastData} /> }
    </>
  );
};

export default Location;
