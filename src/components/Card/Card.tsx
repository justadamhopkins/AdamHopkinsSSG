import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { ModalState } from '../../pages/work'

const StyledCardContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  cursor: pointer;
  > div {
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    background: #fff;
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

interface Props {
  title: string
  setModalState: any
}

const Card: React.FC<Props> = ({ title, setModalState }) => {
  return (
    <StyledCardContentWrapper onClick={setModalState}>
      <div>{title}</div>
    </StyledCardContentWrapper>
  )
}

interface CardProps {
  setModalState: Dispatch<SetStateAction<ModalState>>
}

export const CardList: FC<CardProps> = ({ setModalState }) => {
  const portfolioHistory = [
    { title: 'job1', id: 'job1' },
    { title: 'job2', id: 'job2' },
    { title: 'job3', id: 'job3' },
    { title: 'job4', id: 'job4' }
  ]

  return (
    <AnimateSharedLayout>
      <StyledCardList layout>
        {portfolioHistory.map(({ title, id }) => (
          <motion.li key={title}>
            <Card
              title={title}
              setModalState={() => setModalState({ isModalOpen: true, id })}
            />
          </motion.li>
        ))}
      </StyledCardList>
    </AnimateSharedLayout>
  )
}
