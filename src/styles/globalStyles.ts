import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  head,
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background);
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    min-height: 100vh;
    background: var(--background)
  }
`;

export default GlobalStyle;
