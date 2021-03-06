import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../styles/ui/breakpoints'
import Img from 'gatsby-image'

const StyledCardList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  li {
    position: relative;
    height: 350px;
    flex: 1 0 100%;
    max-width: 100%;
    padding: 10px;
    padding-left: 0;
    padding-right: 0;
    ${breakpoint.md`
      padding: 25px;
      max-width: 40%;
      flex: 0 0 40%;
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
    `}
  }
`

const StyledCardContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  cursor: pointer;
  > div {
    pointer-events: auto;
    position: relative;
    background: #fff;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    h2 {
      font-size: 2.5rem;
      color: #fff;

      background-size: 100% 200%;
      background-image: linear-gradient(
        var(--secondaryBackground) 50%,
        var(--background) 50%
      );
      padding: 5px;
    }
  }
`

interface Props {
  title: string
  triggerModal: any
  image: any
}

const Card: React.FC<Props> = ({ title, triggerModal, image }) => {
  console.log(image)
  return (
    <StyledCardContentWrapper onClick={triggerModal}>
      <div>
        <h2>{title}</h2>
        <Img
          style={{
            width: '100%',
            height: 'auto'
          }}
          fluid={image}
          alt={title}
        />
      </div>
    </StyledCardContentWrapper>
  )
}

interface CardProps {
  triggerModal(content: string): void
  portfolioHistory: { title: string; id: string; content: string; fluid: any }[]
}

export const CardList: FC<CardProps> = ({ portfolioHistory, triggerModal }) => {
  return (
    <StyledCardList layout>
      {portfolioHistory.map(({ title, id, content, fluid }) => (
        <motion.li key={id}>
          <Card
            title={title}
            image={fluid}
            triggerModal={() => triggerModal(content)}
          />
        </motion.li>
      ))}
    </StyledCardList>
  )
}
