import styled from 'styled-components';

const CurrentWeatherContainer = styled.div`
  flex: 1;
  min-width: 320px;
  padding: 0 15px 20px 15px;
  font-weight: 600;

  @media (max-width: 800px) {
    margin-bottom: 20px;
    margin-right: 0;
  }

  .secondary-info, .description, .feels-like {
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

export default CurrentWeatherContainer;