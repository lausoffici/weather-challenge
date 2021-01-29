import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react';

type CityPickerProps = {
  handleCitySubmit: (event: FormEvent) => void;
  cityName: string;
  setCityName: Dispatch<SetStateAction<string>>;
};

const CityPicker: FC<CityPickerProps> = ({ handleCitySubmit, cityName, setCityName }) => (
  <form onSubmit={handleCitySubmit}>
    <label>
      City name:
      <input type="text" name="cityName" value={cityName} onChange={(e) => setCityName(e.target.value)} />
    </label>
    <input type="submit" value="Search" />
  </form>
);

export default CityPicker;
