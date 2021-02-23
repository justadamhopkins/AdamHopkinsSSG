import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { breakpoint } from '../../styles/ui/breakpoints'

interface Props {
  delay?: number
}

const StyledTitle = styled(motion.h1)`
  text-align: center;
  font-size: var(--font-size-small);
  background-size: 100% 200%;
  background-image: linear-gradient(
    var(--secondaryBackground) 50%,
    var(--background) 50%
  );
  text-decoration: underline;
  padding-top: 20px;
  display: inline-block;
  transform: skew(-5deg);
  color: #fff;
  padding: 5px;
  ${breakpoint.md`
      font-size:  var(--font-size-large);
  `}
`

export const Title: React.FC<Props> = ({ children, delay = 3 }) => {
  return (
    <StyledTitle
      initial={{ backgroundPosition: '0 100%' }}
      animate={{ backgroundPosition: '0% 0%' }}
      transition={{
        duration: 1,
        ease: 'easeIn',
        delay
      }}
    >
      {children}
    </StyledTitle>
  )
}
