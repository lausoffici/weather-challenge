import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  head,
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #d3ffe6;
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 25px;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-grow-1 {
    flex-grow: 1;
  }
`;

export default GlobalStyle;
