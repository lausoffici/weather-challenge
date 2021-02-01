import React from "react";
import { screen, render } from "@testing-library/react";
import CurrentWeather, { CurrentWeatherProps } from "../CurrentWeather";
import "@testing-library/jest-dom";

const defProps: CurrentWeatherProps = {
  weatherData: undefined,
};

const component = () => render(<CurrentWeather {...defProps} />);

describe("CurrentWeather test suite", () => {
  it("Renders correctly", () => {
    component();

    expect(screen.getByText("Current weather")).toBeVisible();
  });
});
