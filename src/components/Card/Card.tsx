import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
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

const StyledCardList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  li {
    position: relative;
    padding: 25px;
    height: 350px;
    flex: 0 0 40%;
    max-width: 40%;
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 0 0 60%;
      max-width: 60%;
    }
    &:nth-child(odd) {
      padding-left: 0;
    }
    &:nth-child(even) {
      padding-right: 0;
    }
  }
`

const Card: React.FC = () => {
  return (
    <StyledCardContentWrapper>
      <Content />
    </StyledCardContentWrapper>
  )
}

const Content = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>dog</div>
      <div>dog</div>
      <div>dog</div>
    </motion.div>
  )
}

export const CardList = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <AnimateSharedLayout>
      <StyledCardList layout>
        <motion.li layout onClick={toggleOpen}>
          <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
          <Card />
        </motion.li>
      </StyledCardList>
    </AnimateSharedLayout>
  )
}
