import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.8rem;
  }
  `;
