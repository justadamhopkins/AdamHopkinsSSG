import React, { FC } from 'react'
import { GlobalFontStyles } from '../../styles/fonts/GlobalFontStyles'
import { GlobalUiStyles } from '../../styles/ui/GlobalUiStyles'
import { Nav } from '../Nav/Nav'
import styled from 'styled-components'

const StyledSiteWrapper = styled.div`
  margin: 1.5rem;
`

export const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <GlobalFontStyles />
      <GlobalUiStyles />
      <StyledSiteWrapper>
        <Nav />
        {children}
      </StyledSiteWrapper>
    </>
  )
}
