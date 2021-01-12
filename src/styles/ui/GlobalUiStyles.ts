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
    --lightLilac: #bb9bb5;
    --darkPink: #e8b9d2;
    --lightGrey: #c0c5d1;
    --smoothPurple: #673ab7;
    --smoothGrey: #b0a8b9;
    --smoothGreen: #00b397;
  }
  ${reset}
  *, *:before, *:after {
    box-sizing: inherit;
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
    --background: #f1faee;
    --dog: blue;
  }
  .dark {
    --background: #1d3557;
    --dog: red;
  }
`
