import styled from 'styled-components';

const CityPickerContainer = styled.div`
  flex: 2;
  min-width: 320px;
  padding: 0 15px;

  label {
    font-weight: 600;
  }

  input {
    display: block;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 30px;
    font-size: 1.1rem;
  }

  button {
    font-size: 1em;
    background: #17aa56;
    color: #fff;
    border-radius: 7px;
    box-shadow: 0 5px #119e4d;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    outline: none;
  }
`;

export default CityPickerContainer;