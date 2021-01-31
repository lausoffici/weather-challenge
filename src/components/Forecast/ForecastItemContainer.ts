import styled from "styled-components";

const ForecastItemContainer = styled.div`
  flex: 1;
  max-width: 800px;
  text-align: center;
  font-weight: 600;

  .temp {
    font-size: 1.7rem;
    font-weight: 800;
  }

  .description {
    font-size: 1.2rem;
    padding: 15px 0;
  }

  .info {
    opacity: 0.7;
  }
`;

export default ForecastItemContainer;