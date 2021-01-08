import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledNav = styled(motion.nav)`
  width: 100vw;
  height: 100vh;
  background-color: var(--darkPurps);
  position: fixed;
  top: 0;
  right: 0;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      font-family: 'LeagueSpartanBold', sans-serif;
      letter-spacing: 2px;
      min-width: 200px;
      color: var(--white);
      font-size: 2rem;
      padding: 5px;
      text-decoration: underline;
      transition: all 0.15s ease;
      background-size: 100% 200%;
      background-position: 0 -100%;
      text-align: center;
      margin: 5px 0;
      background-image: linear-gradient(
        to top,
        transparent 50%,
        var(--smoothGreen) 50%
      );
      &:hover {
        color: var(--materialBlack);
        background-position: 0 0;
      }
    }
  }
`

const variants = {
  open: { x: 0 },
  closed: {
    x: '-100%',
    transition: {
      delay: 1
    }
  }
}

const ulVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1,
      when: 'afterChildren'
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
      when: 'afterChildren'
    }
  }
}

const linkVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: { y: '-20', opacity: 0 }
}

type Props = {
  isNavOpen: boolean
}

const links = ['About', 'Work', 'Contact']

export const Nav: FC<Props> = ({ isNavOpen }) => {
  return (
    <StyledNav
      variants={variants}
      initial='closed'
      animate={isNavOpen ? 'open' : 'closed'}
      transition={{ damping: 300 }}
    >
      <div>
        <motion.ul variants={ulVariants}>
          {links.map(link => (
            <motion.li key={link} variants={linkVariants}>
              {link}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </StyledNav>
  )
}
