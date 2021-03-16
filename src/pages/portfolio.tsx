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
      'Mobile app developed using React Native and Typescript for The Times newspaper. Launched to IOS app store and Google Play store.'
  },
  {
    title: 'Times Cancellation',
    id: 'cancellation',
    content:
      'Online subscription cancellation journey developed for The Times newspaper. Built using React, Apollo client, Typescript, React testing library and Cypress. A GraphQL api was also developed using Apollo server to integrate and consume a rest api.'
  },
  {
    title: 'Times Help',
    id: 'help',
    content:
      'Help and FAQ application developed for The Times newspaper. Built using React, Typescript, React testing library and Cypress. This included a serverless lambda that integrated with a service called Algolia for fetching and storing articles.'
  },
  {
    title: 'www.thetimes.co.uk',
    id: 'times',
    content:
      'Helped maintain and build new features for the core node application for The Times newspaper.'
  },
  {
    title: 'Topshop',
    id: 'topshop',
    content:
      'Front end re-platform for Arcadia group including redevelopment of their 8 brand e-commerce websites in React, Node, Enzyme and Cypress.'
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
