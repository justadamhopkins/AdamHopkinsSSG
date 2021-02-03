import React, { FC } from 'react'
import styled from 'styled-components'
import { PortfolioImage } from '../components/PortfolioImage/PortfolioImage'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { breakpoint } from '../styles/ui/breakpoints'

const StyledProfileWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1.6rem;
  }
  > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
  ${breakpoint.sm`
    h1 {
      font-size: 3rem
    }
    h2 {
      font-size: 2rem
    }
  `};
`

const HomePage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio home page' />
      <StyledProfileWrapper>
        <div>
          <PortfolioImage />
          <div>
            <h1>Adam Hopkins</h1>
            <h2>Full stack web developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium, laboriosam? Eaque eveniet placeat fugit pariatur
              consequuntur modi nam, sint cum veritatis voluptatum, laudantium
              repellat obcaecati eligendi. Illo alias voluptatum inventore.
            </p>
          </div>
        </div>
      </StyledProfileWrapper>
    </>
  )
}

export default HomePage
