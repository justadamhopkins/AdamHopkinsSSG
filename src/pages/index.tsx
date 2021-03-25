import React, { FC } from 'react'
import styled from 'styled-components'
import { PortfolioImage } from '../components/PortfolioImage/PortfolioImage'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { breakpoint } from '../styles/ui/breakpoints'
import { motion } from 'framer-motion'
import { Icon, IconName } from '../components/icons/Icon'
import { Title } from '../components/Title/Title'

export const StyledProfileWrapper = styled(motion.section)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  h2 {
    /* padding-top: 20px; */
  }
  p {
    /* padding-top: 20px; */

    font-family: 'FiraCodeLight';
  }
  div:first-child {
    padding-bottom: 2rem;
  }
  ${breakpoint.md`
    flex-flow: row nowrap;
    justify-content: center;
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
  padding: 3rem;
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
          <Title>Adam Hopkins</Title>
          <h2>Full stack web developer</h2>
          <p>Making the web a much more awesome place</p>
          <StyledIconWrapper>
            {Object.keys(links).map((iconName: IconName) => (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                key={iconName}
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
