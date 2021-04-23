import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 520px) {
    html {
      font-size: 77.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray50};
    color: ${({ theme }) => theme.colors.gray500};
  }

  body,
  input,
  textarea,
  button {
    font: 500 1rem "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.gray500};
  }

  h1, h2, h3 ,h4 ,h5, h5{
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${({ theme }) => theme.colors.gray800};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 2rem;
  }

  h2{
    font-size: 1.5rem;
  }
`
