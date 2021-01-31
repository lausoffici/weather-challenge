import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import Card from '../Card/Card';
import CityPickerContainer from './CityPickerContainer';

type CityPickerProps = {
  handleCitySubmit: (event: FormEvent) => void;
  cityName: string;
  setCityName: Dispatch<SetStateAction<string>>;
};

const CityPicker: FC<CityPickerProps> = ({ handleCitySubmit, cityName, setCityName }) => (
  <Card className="flex-grow-1">
    <CityPickerContainer>
      <form onSubmit={handleCitySubmit} autoComplete="off">
        <h1>Weather in your city</h1>
        <label>
          City
        </label>
        <input type="text" placeholder="Enter a city e.g: London" name="cityName" value={cityName} onChange={(e) => setCityName(e.target.value)} />
        <button>Search</button>
      </form>
    </CityPickerContainer>
  </Card>
);

export default CityPicker;
