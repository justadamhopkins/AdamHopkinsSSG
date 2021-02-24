import React from 'react'
import styled from 'styled-components'

const StyledCardContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  pointer-events: none;
  > div {
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    background: #1c1c1e;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`

export const Card: React.FC = () => {
  return (
    <StyledCardContentWrapper>
      <div>Card</div>
    </StyledCardContentWrapper>
  )
}
