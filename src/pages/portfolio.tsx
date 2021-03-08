import React, { FC } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { Title } from '../components/Title/Title'
import { CardList } from '../components/Card/Card'
import { useModalConfig } from '../contexts/ModalContext'
import { PageProps } from 'gatsby'
import { mergePortfolioData } from '../utils/mergePortfolioData'

const portfolioHistory = [
  { title: 'Times Puzzles', id: 'timesPuzzles', content: 'job1content' },
  { title: 'Times Cancellation', id: 'cancellation', content: 'job2content' },
  { title: 'Times Help', id: 'help', content: 'job3content' },
  { title: 'Topshop', id: 'topshop', content: 'job4content' }
]

const StyledWorkWrapper = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0px auto;
`

const StyledCardWrapper = styled.div`
  padding-top: 3rem;
`

const PortfolioPage: FC<PageProps> = ({ data }) => {
  const { triggerModal } = useModalConfig()

  const mergedPortfolios = mergePortfolioData(portfolioHistory, data)

  return (
    <>
      <SiteHelmet pageTitle='Portfolio' />
      <StyledWorkWrapper>
        <Title delay={2}>Portfolio</Title>
        <StyledCardWrapper>
          <CardList
            portfolioHistory={mergedPortfolios}
            triggerModal={triggerModal}
          />
        </StyledCardWrapper>
      </StyledWorkWrapper>
    </>
  )
}

export default PortfolioPage

export const query = graphql`
  query PortfolioImageQuery {
    allImageSharp {
      nodes {
        fixed(height: 260, width: 290) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }
`
