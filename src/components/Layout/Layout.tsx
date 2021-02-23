import React, { FC } from 'react'
import { GlobalFontStyles } from '../../styles/fonts/GlobalFontStyles'
import { GlobalUiStyles } from '../../styles/ui/GlobalUiStyles'
import { Header } from '../Header/Header'
import styled from 'styled-components'
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher'
import { Footer } from '../Footer/Footer'
import { breakpoint } from '../../styles/ui/breakpoints'
import { useIsClient } from '../../hooks/useClient'

const StyledSiteWrapper = styled.div`
  background-color: var(--background);
  height: 100%;
  padding: 1rem;
  ${breakpoint.md`
    height: calc(100% - 63px);
    padding: 2rem;
    main {
        height: 100%;
      }
   `}
`

export const Layout: FC<{}> = ({ children }) => {
  const { toggleTheme, theme } = useThemeSwitcher()

  const { isClient, key } = useIsClient()

  if (!isClient) return null

  return (
    <div className={theme} key={key}>
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
