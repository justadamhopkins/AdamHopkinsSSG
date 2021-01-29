import React from 'react'
import styled from 'styled-components'

const StyledFooterWrapper = styled.footer`
  padding: 2rem;
  background-color: var(--secondaryBackground);
  width: 100%;
  > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: #fff;
  }
`

export const Footer: React.FC = () => {
  return (
    <StyledFooterWrapper>
      <div>
        <small>&copy; Adam Hopkins</small>
      </div>
    </StyledFooterWrapper>
  )
}
