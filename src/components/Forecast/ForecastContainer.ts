import styled from "styled-components";

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  
  @media (max-width: 800px) {
    width: 350px;

    .content {
      flex-direction: column;
      align-items: center;
      padding: 0!important;
    }
  }

  .content {
    display: flex;
    padding: 20px 0;
  }
`;

export default ForecastContainer;