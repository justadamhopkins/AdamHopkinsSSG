import React from 'react'
import { IconProps } from './Icon'
import { StyledIcon } from './styles'

export const LinkedInIcon: React.FC<Omit<IconProps, 'iconName'>> = ({
  width,
  height
}) => {
  return (
    <StyledIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
    >
      <path d='M39.582 0H10.418C4.664 0 0 4.664 0 10.418v29.164C0 45.336 4.664 50 10.418 50h29.164C45.336 50 50 45.336 50 39.582V10.418C50 4.664 45.336 0 39.582 0zM16.668 39.582h-6.25V16.668h6.25zm-3.125-25.559c-2.016 0-3.648-1.644-3.648-3.671 0-2.032 1.632-3.676 3.648-3.676 2.012 0 3.645 1.644 3.645 3.676 0 2.027-1.633 3.671-3.645 3.671zm28.125 25.559h-6.25V27.91c0-7.02-8.336-6.488-8.336 0v11.672h-6.25V16.668h6.25v3.676c2.91-5.387 14.586-5.785 14.586 5.16zm0 0' />
    </StyledIcon>
  )
}
