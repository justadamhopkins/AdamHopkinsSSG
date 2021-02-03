import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalUiStyles = createGlobalStyle`
  :root {
    --red: #ff4949;
    --black: #2e2e2e;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --materialBlack: #282c35;
    --darkGrey: #464655;
    --darkPurps: #686276;
    --darkLilac: #907e96;
    --darkPink: #e8b9d2;
    --lightLilac: #bb9bb5;
    --lightGrey: #c0c5d1;
    --smoothPurple: #673ab7;
    --smoothGrey: #b0a8b9;
    --smoothGreen: #00b397;
  }
  ${reset}
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, 
  body, 
  #___gatsby, 
  .light, 
  .dark {
    height: 100%;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: '#1a202c';
  }
  body {
    font-size: 62.5%;
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
  }
  .light {
    --background: #c0c5d1;
    --secondaryBackground: #673ab7;
    --thirdBackground: #b0a8b9;
    --fontPrimary: #efefef;
  }
  .dark {
    --background: #282c35;
    --secondaryBackground: #e8b9d2;
    --thirdBackground: #464655;
    --fontPrimary: #464655;
  }
  h1,h2,h3,h4,p {
    font-family: 'LeagueSpartanBold';
    letter-spacing: 1px;
  }
`
