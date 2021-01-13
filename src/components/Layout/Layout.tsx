import React, { FC } from 'react'
import { GlobalFontStyles } from '../../styles/fonts/GlobalFontStyles'
import { GlobalUiStyles } from '../../styles/ui/GlobalUiStyles'
import { Header } from '../Header/Header'
import styled from 'styled-components'
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher'

const StyledSiteWrapper = styled.div`
  padding: 2rem;
  background-color: var(--background);
  color: var(--dog);
`

export const Layout: FC<{}> = ({ children }) => {
  const { toggleTheme, theme } = useThemeSwitcher()

  return (
    <>
      <GlobalFontStyles />
      <GlobalUiStyles />
      <StyledSiteWrapper className={theme}>
        <Header toggleTheme={toggleTheme} />
        {children}
      </StyledSiteWrapper>
    </>
  )
}
