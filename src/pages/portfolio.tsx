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
  {
    title: 'Times Puzzles',
    id: 'timesPuzzles',
    content:
      'I developed a React Native Typescript app for The Times. This was launched to both the app and play store in January 2021.'
  },
  {
    title: 'Times Cancellation',
    id: 'cancellation',
    content:
      'I developed an online subscription cancellation journey for The Times. This was built using React, Apollo client, Typescript, React testing library and Cypress. A GraphQL api was also developed using Apollo server to integrate and consume a rest api.'
  },
  {
    title: 'Times Help',
    id: 'help',
    content:
      'I developed a new help application for The Times. This was built using React, Typescript, React testing library and Cypress. I also developed a serverless lambda that integrated with a service called Algolia for fetching and storing of help articles.'
  },
  {
    title: 'Topshop',
    id: 'topshop',
    content:
      'I worked on a re-platform for Arcadia group. I redeveloped their 8 brand e-commerce websites in React, Node, Enzyme and Cypress.'
  }
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
