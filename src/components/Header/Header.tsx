import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Hamburger } from '../Hamburger/Hamburger'
import { Nav } from '../Nav/Nav'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Header: FC = () => {
  const [isNavOpen, setisNavOpen] = useState(false)

  return (
    <>
      <Wrapper>
        <div>test</div>
        <Hamburger active={isNavOpen} toggleHamburger={setisNavOpen} />
      </Wrapper>
      <Nav isNavOpen={isNavOpen} toggleNav={setisNavOpen} />
    </>
  )
}
