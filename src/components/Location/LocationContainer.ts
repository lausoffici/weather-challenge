import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .row {
    display: flex;
    justify-content: space-between;
    width: 800px;

    @media (max-width: 715px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default LocationContainer;