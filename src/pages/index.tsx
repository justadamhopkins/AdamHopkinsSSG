import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { PortfolioImage } from '../components/PortfolioImage/PortfolioImage'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { breakpoint } from '../styles/ui/breakpoints'


const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `

export const StyledProfileWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 2rem;
  h1 {
    font-size: var(--font-size-medium);
    animation: ${gradient} 15s ease infinite;
    background-size: 400% 400%;
    background-image: linear-gradient(
      -45deg,
      var(--secondaryBackground),
      var(--background),
      var(--smoothGreen),
      var(--materialBlack)
    );
    display: inline-block;
    transform: skew(-5deg);
    color: #fff;
    padding: 5px;
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
