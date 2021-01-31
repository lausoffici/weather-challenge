import styled from "styled-components";

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 0;

  .content {
    display: flex;
    padding: 10px 0;
  }
  
  @media (max-width: 800px) {
    width: 350px;

    .content {
      flex-direction: column;
      padding: 0;
    }
  }
`;

export default ForecastContainer;