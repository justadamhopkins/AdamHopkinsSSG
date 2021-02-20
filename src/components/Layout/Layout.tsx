import React, { FC, useEffect } from 'react'
import { GlobalFontStyles } from '../../styles/fonts/GlobalFontStyles'
import { GlobalUiStyles } from '../../styles/ui/GlobalUiStyles'
import { Header } from '../Header/Header'
import styled from 'styled-components'
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher'
import { Footer } from '../Footer/Footer'
import { breakpoint } from '../../styles/ui/breakpoints'

const StyledSiteWrapper = styled.div`
  background-color: var(--background);
  height: auto;
  padding: 1rem;
  main {
    height: 100%;
  }
  ${breakpoint.md`
   height: calc(100% - 63px);
    padding: 2rem;
   `}
`

export const Layout: FC<{}> = ({ children }) => {
  const { toggleTheme, theme } = useThemeSwitcher()
  console.log('🚀 ~ file: Layout.tsx ~ line 25 ~ theme', { theme })

  return (
    <div className={theme}>
      <GlobalFontStyles />
      <GlobalUiStyles />
      <StyledSiteWrapper>
        <Header toggleTheme={toggleTheme} />
        <main>{children}</main>
      </StyledSiteWrapper>
      <Footer />
    </div>
  )
}
