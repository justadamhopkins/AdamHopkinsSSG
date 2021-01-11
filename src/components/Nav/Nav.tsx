import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

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
      min-width: 200px;
      text-align: center;
      margin: 5px 0;
      a {
        display: block;
        letter-spacing: 2px;
        color: var(--white);
        font-size: 2rem;
        padding: 5px;
        text-decoration: underline;
        transition: all 0.15s ease;
        background-size: 100% 200%;
        background-position: 0 -100%;
        background-image: linear-gradient(
          to top,
          transparent 50%,
          var(--smoothGreen) 50%
        );
        &:hover,
        &[aria-current='page'] {
          color: var(--materialBlack);
          background-position: 0 0;
        }
      }
    }
  }
`

const navVariants = {
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
  toggleNav: Dispatch<SetStateAction<boolean>>
}

export const pages = ['About', 'Work', 'Contact'] as const

type Pages = typeof pages[number]

const links: { path: string; name: Pages }[] = [
  {
    path: '/',
    name: 'About'
  },
  {
    path: '/work',
    name: 'Work'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
]

export const Nav: FC<Props> = ({ isNavOpen, toggleNav }) => {
  return (
    <StyledNav
      variants={navVariants}
      initial='closed'
      animate={isNavOpen ? 'open' : 'closed'}
      transition={{ damping: 300 }}
    >
      <div>
        <motion.ul variants={ulVariants}>
          {links.map(({ path, name }) => (
            <motion.li
              key={name}
              variants={linkVariants}
              onClick={() => toggleNav(false)}
            >
              <Link to={path}>{name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </StyledNav>
  )
}
