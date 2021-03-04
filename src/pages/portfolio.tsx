import React, { FC } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { Title } from '../components/Title/Title'
import { CardList } from '../components/Card/Card'
import { useModalConfig } from '../contexts/ModalContext'

const portfolioHistory = [
  { title: 'Times Puzzles', id: 'job1', content: 'job1content' },
  { title: 'Times Cancellation', id: 'job2', content: 'job2content' },
  { title: 'Times Help', id: 'job3', content: 'job3content' },
  { title: 'Topshop', id: 'job4', content: 'job4content' }
]

const StyledWorkWrapper = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0px auto;
`

const StyledCardWrapper = styled.div`
  padding-top: 3rem;
`

const PortfolioPage: FC<{}> = ({ data }) => {
  console.log(data)
  const { triggerModal } = useModalConfig()

  return (
    <>
      <SiteHelmet pageTitle='Portfolio' />
      <StyledWorkWrapper>
        <Title delay={2}>Portfolio</Title>
        <StyledCardWrapper>
          <CardList
            portfolioHistory={portfolioHistory}
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
        fixed(height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
