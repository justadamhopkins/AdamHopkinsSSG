import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { breakpoint } from '../../styles/ui/breakpoints'

const StyledNav = styled(motion.nav)`
  width: 100vw;
  height: 100vh;
  background-color: var(--thirdBackground);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
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
        font-size: var(--font-size-small);
        padding: 5px;
        text-decoration: underline;
        transition: all 0.15s ease;
        background-size: 100% 200%;
        background-position: 0 -100%;
        background-image: linear-gradient(
          to top,
          transparent 50%,
          var(--secondaryBackground) 50%
        );
        &:hover,
        &[aria-current='page'] {
          color: var(--fontPrimaryNav);
          background-position: 0 0;
        }
        ${breakpoint.sm`
         font-size: var(--font-size-medium);
         `}
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

export const pages = ['About', 'Portfolio', 'Contact'] as const

type Pages = typeof pages[number]

const links: { path: string; name: Pages; isActive: boolean }[] = [
  {
    path: '/',
    name: 'About',
    isActive: true
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    isActive: true
  },
  {
    path: '/contact',
    name: 'Contact',
    isActive: false
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
          {links
            .filter(({ isActive }) => isActive)
            .map(({ path, name }) => (
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
