import { createGlobalStyle } from 'styled-components'

import LeagueSpartanBoldWoff from './LeagueSpartanBold.woff' //@ts-ignore
import LeagueSpartanBoldWoff2 from './LeagueSpartanBold.woff2' //@ts-ignore
import LeagueSpartanBoldOtf from './LeagueSpartanBold.otf' //@ts-ignore

export const GlobalFontStyles = createGlobalStyle`
    @font-face {
        font-family: 'LeagueSpartanBold';
        src: local('LeagueSpartanBold'), local('LeagueSpartanBold'),
        url(${LeagueSpartanBoldWoff2}) format('woff2'),
        url(${LeagueSpartanBoldWoff}) format('woff'),
        url(${LeagueSpartanBoldOtf}) format('otf');
        font-weight: normal;
        font-style: normal;
    }
`
