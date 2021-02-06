import React, { FC } from 'react'
import styled from 'styled-components'
import { PortfolioImage } from '../components/PortfolioImage/PortfolioImage'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { breakpoint } from '../styles/ui/breakpoints'
import { motion } from 'framer-motion'

export const StyledProfileWrapper = styled(motion.section)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 2rem;
  h1 {
    font-size: var(--font-size-medium);
    background-size: 100% 200%;
    background-image: linear-gradient(
      var(--secondaryBackground) 50%,
      var(--background) 50%
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

const StyledDescriptionWrapper = styled(motion.div)`
  padding-top: 1.5rem;
  text-align: center;
  ${breakpoint.md`
    padding-top: 0;
    padding-left: 2rem;
  `}
`

const portfolioImageVariant = {
  start: {
    x: '-200%'
  },
  end: {
    x: 0,
    transition: {
      duration: 1.2,
      ease: 'easeIn',
      damping: 300
    }
  }
}

const styledDescriptionVariant = {
  start: {
    y: '-200%'
  },
  end: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeIn',
      damping: 300,
      delay: 1.5
    }
  }
}

const titleVariant = {
  start: {
    backgroundPosition: '0 100%'
  },
  end: {
    backgroundPosition: '0% 0%',
    transition: {
      duration: 1,
      ease: 'easeIn',
      delay: 3
    }
  }
}

const HomePage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio home page' />
      <StyledProfileWrapper>
        <motion.div
          variants={portfolioImageVariant}
          initial='start'
          animate='end'
          style={{ width: '350px' }}
        >
          <PortfolioImage />
        </motion.div>
        <StyledDescriptionWrapper
          variants={styledDescriptionVariant}
          initial='start'
          animate='end'
        >
          <motion.h1 variants={titleVariant} initial='start' animate='end'>
            Adam Hopkins
          </motion.h1>
          <h2>Full stack web developer</h2>
          <p>Making the web a much more awesome place</p>
        </StyledDescriptionWrapper>
      </StyledProfileWrapper>
    </>
  )
}

export default HomePage
