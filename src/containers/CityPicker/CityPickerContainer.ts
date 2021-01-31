import styled from 'styled-components';

const CityPickerContainer = styled.div`
  flex: 2;
  min-width: 320px;
  padding: 20px;

  label {
    font-weight: 600;
  }

  input {
    display: block;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 35px;
    font-size: 1.1rem;
    border: 2px solid transparent;
    border-radius: 7px;
    background-color: #fff;

    &:focus {
      outline: none;
      border: 2px solid #6870d2;
    }
  }

  button {
    font-size: 1em;
    background: #727dff;
    color: #fff;
    border-radius: 7px;
    box-shadow: 0 5px #6870d2;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    outline: none;
    transition: .4s;

    &:hover { 
      background-color: #6870d2;
    }
  }
`;

export default CityPickerContainer;