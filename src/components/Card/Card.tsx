import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledCardList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding-bottom: 3rem;
  li {
    position: relative;
    height: 260px;
    width: 290px;
  }
`

const StyledCardContentWrapper = styled.div`
  height: 100%;
  position: relative;
  display: block;
  cursor: pointer;
  > div {
    pointer-events: auto;
    position: relative;
    background: #fff;
    overflow: hidden;
    height: 100%;
    border-radius: 10px;
  }
`

const StyledTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 1;
  background-color: var(--secondaryBackground);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.8rem;
    color: #fff;
  }
`

interface Props {
  title: string
  triggerModal: any
  image: any
}

const Card: React.FC<Props> = ({ title, triggerModal, image }) => {
  return (
    <StyledCardContentWrapper onClick={triggerModal}>
      <div>
        <StyledTitleWrapper>
          <h2>{title}</h2>
        </StyledTitleWrapper>
        <Img fixed={image} alt={title} />
      </div>
    </StyledCardContentWrapper>
  )
}

interface CardProps {
  triggerModal(content: string): void
  portfolioHistory: { title: string; id: string; content: string; fixed: any }[]
}

export const CardList: FC<CardProps> = ({ portfolioHistory, triggerModal }) => {
  return (
    <StyledCardList layout>
      {portfolioHistory.map(({ title, id, content, fixed }) => (
        <motion.li key={id}>
          <Card
            title={title}
            image={fixed}
            triggerModal={() => triggerModal(content)}
          />
        </motion.li>
      ))}
    </StyledCardList>
  )
}
