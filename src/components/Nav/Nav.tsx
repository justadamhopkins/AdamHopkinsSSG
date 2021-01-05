import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import { Hamburger } from '../Hamburger/Hamburger'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const Nav: FC = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false)

  return (
    <Wrapper>
      <div>test</div>
      <div>test</div>
      <div>
        <Hamburger
          active={toggleHamburger}
          setToggleHamburger={setToggleHamburger}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </div>
    </Wrapper>
  )
}
