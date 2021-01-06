import React, { FC } from 'react'
import { GlobalFontStyles } from '../../styles/fonts/GlobalFontStyles'
import { GlobalUiStyles } from '../../styles/ui/GlobalUiStyles'
import { Header } from '../Header/Header'
import styled, { ThemeProvider } from 'styled-components'

const StyledSiteWrapper = styled.div`
  margin: 1.5rem;
`

export const Layout: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalFontStyles />
      <GlobalUiStyles />
      <StyledSiteWrapper>
        <Header />
        {children}
      </StyledSiteWrapper>
    </ThemeProvider>
  )
}
