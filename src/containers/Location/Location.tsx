import React, { FormEvent, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useWeather } from "../../hooks/useWeather";
import { LocationResponse } from "../../types/index";
import CityPicker from "../CityPicker/CityPicker";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";
import LocationContainer from "./LocationContainer";

const Location: React.FC = () => {
  const [cityName, setCityName] = useState<string>("");

  const { data: locationData } = useFetch<LocationResponse>(
    process.env.LOCATION_API_URL || ""
  );

  const {
    currentWeatherData,
    getCurrentWeatherData,
    forecastData,
    getForecastData,
  } = useWeather();

  // Fetching weather data with client's location at init
  useEffect(() => {
    if (!locationData) return;

    const queryParams = `&lat=${locationData.latitude}&lon=${locationData.longitude}`;
    getCurrentWeatherData(queryParams);
    getForecastData(queryParams);
  }, [locationData, getCurrentWeatherData, getForecastData]);

  // Handling CityPicker's submit
  const handleCitySubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!locationData && !cityName) return;

    // if city is provided tries to fetch city's weather data, if not fetch client's location weather data
    if (cityName) {
      const queryParams = `&q=${cityName}`;
      getCurrentWeatherData(queryParams);
      getForecastData(queryParams);
    } else {
      const queryParams = `&lat=${locationData?.latitude}&lon=${locationData?.longitude}`;
      getCurrentWeatherData(queryParams);
      getForecastData(queryParams);
    }
  };

  return (
    <LocationContainer>
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
    </LocationContainer>
  );
};

export default Location;
