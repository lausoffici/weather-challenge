import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { useClientLocation } from "../../hooks/useClientLocation";
import { useWeather } from "../../hooks/useWeather";
import CityPicker from "../CityPicker/CityPicker";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";
import HomeContainer from "./HomeContainer";

const Home: React.FC = () => {
  const [cityName, setCityName] = useState<string>("");

  // Ask for client's location
  const locationData = useClientLocation();

  const {
    currentWeatherData,
    forecastData,
    fetchCurrentWeatherAndForecastData,
  } = useWeather();

  // GET current and forecast weather data of a city if provided or client's approx location.
  const getWeather = useCallback(
    (cityName?: string) => {
      if (!locationData && !cityName) return;
      const queryParams = cityName
        ? `&q=${cityName}`
        : `&lat=${locationData?.latitude}&lon=${locationData?.longitude}`;
      fetchCurrentWeatherAndForecastData(queryParams);
    },
    [locationData, fetchCurrentWeatherAndForecastData]
  );

  // Fetch client's location weather data by default
  useEffect(() => getWeather(), [locationData, getWeather]);

  // Handling CityPicker's submit
  const handleCitySubmit = (event: FormEvent) => {
    event.preventDefault();
    getWeather(cityName);
  };

  return (
    <HomeContainer>
      <div className="row">
        <CityPicker
          handleCitySubmit={handleCitySubmit}
          cityName={cityName}
          setCityName={setCityName}
        />
        {currentWeatherData && (
          <CurrentWeather weatherData={currentWeatherData} />
        )}
        {forecastData && <Forecast forecastData={forecastData} />}
      </div>
    </HomeContainer>
  );
};

export default Home;
