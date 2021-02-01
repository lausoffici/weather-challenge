import React from "react";
import { screen, render } from "@testing-library/react";
import CityPicker, { CityPickerProps } from "../CityPicker";

const defProps: CityPickerProps = {
  handleCitySubmit: jest.fn,
  cityName: "",
  setCityName: jest.fn,
};

const component = () => render(<CityPicker {...defProps} />);

describe("CityPicker test suite", () => {
  it("Renders correctly", () => {
    component();

    expect(screen.getByText("Weather in your city")).toBeVisible();
  });
});
