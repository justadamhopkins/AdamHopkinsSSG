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
    --font-size-large: 5rem;
    --font-size-medium: 4rem;
    --font-size-small: 3rem;
    --font-size-xtra-small: 2.5rem;
    --font-heading: 'LeagueSpartanBold', sans-serif;
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
    font-size: 62.5%;
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
    font-size: 1.6rem;
  }
  html, body {
    margin:0;
    padding:0;
    height:100%;
  }
  .light {
    --background: var(--lightGrey);
    --secondaryBackground: var(--smoothPurple);
    --thirdBackground: var(--smoothGrey);
    --fontPrimary: var(--black);
    --fontPrimaryNav: var(--grey);
  }
  .dark {
    --background: var(--materialBlack);
    --secondaryBackground: var(--darkPink);
    --thirdBackground: var(--darkGrey);
    --fontPrimary: var(--white);
    --fontPrimaryNav: var(--darkGrey);
  }
  h1,h2,h3,h4,p {
    font-family: var(--font-heading);
    letter-spacing: 1px;
  }
  h1 {
    color: var(--white);
  }
  h2, h3, p {
    color: var(--fontPrimary);
  }
`
