import React, { FC } from 'react'
import { FaGitter } from 'react-icons/fa'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const Nav: FC = () => {
  return (
    <Wrapper>
      <div>test</div>
      <div>test</div>
      <div>
        <FaGitter size={20} />
      </div>
    </Wrapper>
  )
}
