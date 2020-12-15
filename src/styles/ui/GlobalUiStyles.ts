import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalUiStyles = createGlobalStyle`
  ${reset} 
  :root {
    --red: #ff4949;
    --black: #2e2e2e;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  body {
    font-size: 62.5%;
  }
`
