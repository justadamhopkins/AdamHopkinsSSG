import React, { FC } from 'react'
import { GlobalFontStyles } from '../../styles/fonts/GlobalFontStyles'
import { GlobalUiStyles } from '../../styles/ui/GlobalUiStyles'
import { Header } from '../Header/Header'
import styled from 'styled-components'
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher'
import { Footer } from '../Footer/Footer'

const StyledSiteWrapper = styled.div`
  background-color: var(--background);
  height: calc(100% - 63px);
  padding: 2rem;
  main {
    height: 100%;
  }
`

export const Layout: FC<{}> = ({ children }) => {
  const { toggleTheme, theme } = useThemeSwitcher()

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
