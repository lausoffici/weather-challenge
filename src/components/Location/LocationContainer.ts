import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;

  .row {
    display: flex;
    flex: 1;
    justify-content: space-between;
    max-width: 800px;

    @media (max-width: 715px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default LocationContainer;