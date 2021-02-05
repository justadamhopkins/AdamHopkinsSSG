import React, { Dispatch, FC, SetStateAction } from 'react'
import styled, { css } from 'styled-components'

const StyledHamburger = styled.div<{ active: boolean }>`
  z-index: 111111;
  span {
    width: 40px;
    height: 4px;
    background-color: var(--secondaryBackground);
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  ${({ active }) =>
    active &&
    css`
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      -webkit-transition-delay: 0.6s;
      -o-transition-delay: 0.6s;
      transition-delay: 0.6s;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      span {
        background-color: var(--secondaryBackground);
        :nth-child(2) {
          width: 0px;
        }
        :nth-child(1),
        :nth-child(3) {
          -webkit-transition-delay: 0.3s;
          -o-transition-delay: 0.3s;
          transition-delay: 0.3s;
        }
        :nth-child(1) {
          -webkit-transform: translateY(13px);
          -ms-transform: translateY(13px);
          -o-transform: translateY(13px);
          transform: translateY(13px);
        }
        :nth-child(3) {
          -webkit-transform: translateY(-13px) rotate(90deg);
          -ms-transform: translateY(-13px) rotate(90deg);
          -o-transform: translateY(-13px) rotate(90deg);
          transform: translateY(-13px) rotate(90deg);
        }
      }
    `};
  :hover {
    cursor: pointer;
  }
`

type Props = {
  active: boolean
  toggleHamburger: Dispatch<SetStateAction<boolean>>
}

export const Hamburger: FC<Props> = ({ active, toggleHamburger }) => {
  return (
    <StyledHamburger
      active={active}
      onClick={() => toggleHamburger(!active)}
      data-testid='hamburger'
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  )
}
