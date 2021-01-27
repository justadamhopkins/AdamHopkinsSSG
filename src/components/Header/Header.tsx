import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { Hamburger } from '../Hamburger/Hamburger'
import { Nav } from '../Nav/Nav'
import { SwitchToggle } from '../SwitchToggle/SwitchToggle'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
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
