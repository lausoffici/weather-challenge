import React from "react";
import { screen, render } from "@testing-library/react";
import Forecast, { ForecastProps } from "../Forecast";

const defProps: ForecastProps = {
  forecastData: undefined,
};

const component = () => render(<Forecast {...defProps} />);

describe("Forecast test suite", () => {
  it("Renders correctly", () => {
    component();

    expect(screen.getByText("Daily Forecast 5 days")).toBeVisible();
  });
});
