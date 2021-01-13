import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { Hamburger } from '../Hamburger/Hamburger'
import { Nav } from '../Nav/Nav'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  div:nth-child(1) {
    align-self: center;
    text-align: center;
    flex-grow: 1;
  }
`

interface Props {
  toggleTheme(): void
}

export const Header: FC<Props> = ({ toggleTheme }) => {
  const [isNavOpen, setisNavOpen] = useState(false)

  return (
    <>
      <Wrapper>
        <div onClick={toggleTheme}>click me</div>
        <Hamburger active={isNavOpen} toggleHamburger={setisNavOpen} />
      </Wrapper>
      <Nav isNavOpen={isNavOpen} toggleNav={setisNavOpen} />
    </>
  )
}
