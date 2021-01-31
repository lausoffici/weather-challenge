import styled from "styled-components";

const ForecastItemContainer = styled.div`
  flex: 1;
  max-width: 800px;
  text-align: center;
  font-weight: 600;

  h1 {
    margin-top: 0;
  }

  &:not(:last-child) {
    border-right: 1px solid #7af3ad;
  }

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