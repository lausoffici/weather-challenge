import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "../Home";
import "@testing-library/jest-dom";

const component = () => render(<Home />);

describe("CityPicker test suite", () => {
  it("Renders correctly", () => {
    component();

    expect(screen.getByText("Weather in your city")).toBeVisible();
  });
});
