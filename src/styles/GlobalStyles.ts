import { createGlobalStyle } from 'styled-components'
import bg from '../assets/images/bg.svg'
import stripes from '../assets/images/stripes.svg'

const GlobalStyles = createGlobalStyle`
  :root { //todo: global css variables
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    background-image: url(${bg}); //todo: gatsby will embed image as base64 if its small 
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px; //todo: REM base size  -> so 2rem is 20px ( everywhere )
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  
  .netlify-identity-menu {
    list-style: none;
    color: white;
    margin: 0;
  }
  
  .netlify-identity-signup {
    color: white;
  }
  
  .netlify-identity-login {
    color: white;
  }
  
  .netlify-identity-logout {
    color: white;
  }

`

export default GlobalStyles
