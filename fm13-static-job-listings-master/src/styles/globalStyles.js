import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
*:focus {
  outline: none;
}
html {
  box-sizing: border-box;
  font-size: 62.5%; /*  10px/16px = 62.5% -> 1rem = 10px */
} 
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    font-family: 'Spartan', sans-serif;
    font-size: 1.4rem;
    }
  a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
