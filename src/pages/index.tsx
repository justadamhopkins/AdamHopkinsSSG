import React, { FC } from 'react'
import styled from 'styled-components'
import { PortfolioImage } from '../components/PortfolioImage/PortfolioImage'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { breakpoint } from '../styles/ui/breakpoints'
import { motion } from 'framer-motion'
import { Icon, IconName } from '../components/icons/Icon'

export const StyledProfileWrapper = styled(motion.section)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  h1 {
    font-size: var(--font-size-small);
    background-size: 100% 200%;
    background-image: linear-gradient(
      var(--secondaryBackground) 50%,
      var(--background) 50%
    );
    text-decoration: underline;
    padding-top: 20px;
    display: inline-block;
    transform: skew(-5deg);
    color: #fff;
    padding: 5px;
  }
  h2 {
    padding-top: 20px;
    font-size: var(--font-size-xtra-small);
  }
  p {
    padding-top: 20px;
    font-size: var(--font-size-xtra-small);
    font-family: 'FiraCodeLight';
  }
  div:first-child {
    padding-bottom: 2rem;
  }
  ${breakpoint.md`
    flex-flow: row nowrap;
    justify-content: center;
    h1 {
      font-size:  var(--font-size-large);
    }
    h2 {
      font-size: var(--font-size-medium);
    }
    p {
      font-size: var(--font-size-small);
    }
    div:first-child {
    padding-bottom: 0;
  }
  `};
`

const StyledIconWrapper = styled.div`
  padding-top: 20px;
  > div {
    display: inline-block;
    :first-child {
      padding-right: 15px;
    }
    :last-child {
      padding-left: 15px;
    }
    a {
      display: block;
      cursor: pointer;
      outline: none;
    }
  }
`

const StyledDescriptionWrapper = styled(motion.div)`
  padding: 1.5rem;
  text-align: center;
`

const portfolioImageVariant = {
  start: {
    x: '-50%',
    opacity: 0
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeIn',
      damping: 300
    }
  }
}

const styledDescriptionVariant = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeIn',
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

const links = {
  github: 'www.github.com/justadamhopkins',
  linkedIn: 'www.linkedin.com/in/adamhopkins1989'
}

const HomePage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='About' />
      <StyledProfileWrapper>
        <motion.div
          variants={portfolioImageVariant}
          initial='start'
          animate='end'
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
          <StyledIconWrapper>
            {Object.keys(links).map((iconName: IconName) => (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={`//${links[iconName]}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Icon iconName={iconName} width={50} height={50} />
                </a>
              </motion.div>
            ))}
          </StyledIconWrapper>
        </StyledDescriptionWrapper>
      </StyledProfileWrapper>
    </>
  )
}

export default HomePage
