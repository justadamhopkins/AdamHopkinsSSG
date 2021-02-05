import React, { FC } from 'react'
import styled from 'styled-components'
import { PortfolioImage } from '../components/PortfolioImage/PortfolioImage'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { breakpoint } from '../styles/ui/breakpoints'

export const StyledProfileWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 2rem;
  h1 {
    font-size: var(--font-size-medium);
  }
  h2 {
    font-size: var(--font-size-small);
  }
  p {
    font-size: var(--font-size-small);
    font-family: 'FiraCodeLight';
  }
  ${breakpoint.md`
    padding: 2rem;
    flex-flow: row nowrap;
    justify-content: center;

    h1 {
      font-size:  var(--font-size-large);
    }
    h2 {
      font-size: var(--font-size-medium);
    }
  `};
`

const StyledCopyWrapper = styled.div`
  padding-top: 1.5rem;
  text-align: center;
  ${breakpoint.md`
    padding-top: 0;
    padding-left: 2rem;
  `}
`

const HomePage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio home page' />
      <StyledProfileWrapper>
        <PortfolioImage />
        <StyledCopyWrapper>
          <h1>Adam Hopkins</h1>
          <h2>Full stack web developer</h2>
          <p>Making the web a much more awesome place</p>
        </StyledCopyWrapper>
      </StyledProfileWrapper>
    </>
  )
}

export default HomePage
