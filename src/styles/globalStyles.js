import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import FontFaces from './font';

const { colors, font, fontSizes } = theme;

const GlobalStyles = createGlobalStyle`

  ${FontFaces}

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,*:before,*:after{
    box-sizing: inherit;
  }

  body {
    font-family: ${font.barlow_semi_condensed};
    font-size: ${fontSizes.lg};
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
  }
  
  button {
    --webkit-appearance: none;
    cursor: pointer;
    border: 0;
    border-radius: 0;
    font-family: inherit;
    
    &:focus,
    &:active {
      outline: none;
    }
  }

  
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.darkText};
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

  input, textarea {
    border: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }

    &::placeholder {
    }

    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    color: ${colors.darkText};
  }

`;

export default GlobalStyles;
