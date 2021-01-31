import React, { FormEvent, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ForecastResponse, LocationResponse, WeatherResponse } from '../../types/index';
import CityPicker from '../CityPicker/CityPicker';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';
import LocationContainer from './LocationContainer';

const Location: React.FC = () => {
  const [cityName, setCityName] = useState<string>('');

  const { data: locationData } = useFetch<LocationResponse>(process.env.LOCATION_API_URL || '');
  const { data: forecastData, get: getForecastData } = useFetch<ForecastResponse>(process.env.FORECAST_API_URL || '', false);
  const { data: currentWeatherData, get: getCurrentWeatherData } = useFetch<WeatherResponse>(process.env.WEATHER_API_URL || '', false);

  // Fetching weather data with client's location at init
  useEffect(() => {
    if (!locationData) return;

    const queryParams = `&lat=${locationData.lat}&lon=${locationData.lon}`;
    getCurrentWeatherData(queryParams);
    getForecastData(queryParams);
  }, [locationData, getCurrentWeatherData, getForecastData]);

  // Handling CityPicker's submit
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
    <LocationContainer>
      <div className="flex-column">
        <div className="row">
          <CityPicker handleCitySubmit={handleCitySubmit} cityName={cityName} setCityName={setCityName} />
          {currentWeatherData && <CurrentWeather weatherData={currentWeatherData} />}
        </div>
        <div className="row">
          {forecastData && <Forecast forecastData={forecastData} />}
        </div>
      </div>
    </LocationContainer>
  );
};

export default Location;
