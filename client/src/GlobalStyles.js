import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text, textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  html, body {
    max-width: 100vw;
  }
  `;

export default GlobalStyles;
