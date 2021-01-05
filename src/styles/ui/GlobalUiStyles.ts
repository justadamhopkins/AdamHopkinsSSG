import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalUiStyles = createGlobalStyle`
  :root {
    --red: #ff4949;
    --black: #2e2e2e;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
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
`
