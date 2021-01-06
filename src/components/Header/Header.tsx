import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Hamburger } from '../Hamburger/Hamburger'
import { Nav } from '../Nav/Nav'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--darkPurps);
`

export const Header: FC = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false)

  return (
    <>
      <Wrapper>
        <div>test</div>
        <Hamburger
          active={toggleHamburger}
          setToggleHamburger={setToggleHamburger}
        />
      </Wrapper>
      <Nav />
    </>
  )
}
