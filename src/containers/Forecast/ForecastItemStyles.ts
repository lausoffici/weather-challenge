import styled from "styled-components";

const ForecastItemStyles = styled.div`
  flex: 1;
  font-weight: 600;

  &:not(:last-child) {
    border-right: 2px solid #fff;
  }

  h2 {
    margin: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 15px 0;
    border-top: 2px solid #fff;

    &:not(:last-child) {
      border-right: none;
    }
  }

  .temp {
    font-size: 2.5rem;
    font-weight: 800;
    padding-top: 20px;

    .degrees {
      font-size: 1.25rem;
      vertical-align: super;
      margin-left: 5px;
    }
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .info {
    opacity: 0.7;
  }
`;

export default ForecastItemStyles;
