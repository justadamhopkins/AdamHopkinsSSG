import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../styles/ui/breakpoints'
import { Hamburger } from '../Hamburger/Hamburger'
import { Nav } from '../Nav/Nav'
import { SwitchToggle } from '../SwitchToggle/SwitchToggle'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 2rem;
  ${breakpoint.md`
    padding-bottom: 0;
  `}
`

interface Props {
  toggleTheme(): void
}

export const Header: FC<Props> = ({ toggleTheme }) => {
  const [isNavOpen, setisNavOpen] = useState(false)

  return (
    <>
      <Wrapper>
        <Hamburger active={isNavOpen} toggleHamburger={setisNavOpen} />
        <SwitchToggle toggleTheme={toggleTheme} />
      </Wrapper>
      <Nav isNavOpen={isNavOpen} toggleNav={setisNavOpen} />
    </>
  )
}
