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
      color: var(--white);
      font-size: 2rem;
      padding: 5px 0;
    }
  }
`

export const Nav: FC = () => {
  return (
    <StyledNav>
      <div>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </StyledNav>
  )
}
