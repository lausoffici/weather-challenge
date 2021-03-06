import React from "react";
import { ForecastResponse } from "../../types/index";
import { getDailyForecast } from "../../utils/weather.utils";
import ForecastStyles from "./ForecastStyles";
import ForecastItem from "./ForecastItem";

export interface ForecastProps {
  forecastData?: ForecastResponse;
}

const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {
  return (
    <div className="card flex-grow-1">
      <ForecastStyles>
        <h1>Daily Forecast 5 days</h1>
        <div className="content">
          {forecastData &&
            getDailyForecast(forecastData).list.map((item, index) => (
              <ForecastItem key={index} weatherData={item} />
            ))}
        </div>
      </ForecastStyles>
    </div>
  );
};

export default Forecast;
