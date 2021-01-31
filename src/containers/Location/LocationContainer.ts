import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 800px;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default LocationContainer;