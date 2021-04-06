import styled from "styled-components";

const HomeStyles = styled.div`
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

  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
    font-family: "Lato", sans-serif;

    @media (max-width: 1040px) {
      display: none;
    }
  }
`;

export default HomeStyles;
