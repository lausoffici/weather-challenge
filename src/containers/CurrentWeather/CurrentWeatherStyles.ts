import styled from "styled-components";

const CurrentWeatherStyles = styled.div`
  flex: 1;
  min-width: 320px;
  padding: 20px;
  font-weight: 600;

  .secondary-info,
  .description,
  .feels-like {
    opacity: 0.7;
  }

  .content {
    justify-content: space-between;
    display: flex;
  }

  .temp {
    font-size: 5rem;
    .degrees {
      font-size: 2.5rem;
      vertical-align: super;
      margin-left: 5px;
    }
  }

  .secondary-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export default CurrentWeatherStyles;
