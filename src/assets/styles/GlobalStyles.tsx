import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --color-background-dark: #1D2021;
    --color-background-light: #202426;
    --color-text: #EBF4F7;
    --purple-light: #6C63FF;
    --purple-dark: #39447A;
    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  } 
  html,
  body,
  #root {
    min-height: 100vh;
  }
  body {
    background: linear-gradient(var(--color-background-dark), var(--color-background-light));
    color: #FFF;
    font: 1.6rem 'Roboto', sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    color: var(--color-text);
  }
  p, span, b {
    color: var(--color-text);
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input, textarea, select, button, textarea:focus, input:focus, select:focus, button:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: var(--color-text);
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
