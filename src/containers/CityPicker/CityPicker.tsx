import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import CityPickerStyles from "./CityPickerStyles";

export interface CityPickerProps {
  handleCitySubmit: (event: FormEvent) => void;
  cityName: string;
  setCityName: Dispatch<SetStateAction<string>>;
}

const CityPicker: FC<CityPickerProps> = ({
  handleCitySubmit,
  cityName,
  setCityName,
}) => (
  <div className="card flex-grow-1">
    <CityPickerStyles>
      <form onSubmit={handleCitySubmit} autoComplete="off">
        <h1>Weather in your city</h1>
        <label>
          City
          <input
            type="text"
            placeholder="Enter a city e.g: London"
            name="cityName"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </label>
        <button>Search</button>
      </form>
    </CityPickerStyles>
  </div>
);

export default CityPicker;
