import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { Title } from '../components/Title/Title'
import { CardList } from '../components/Card/Card'
import { useModalConfig } from '../contexts/ModalContext'

const portfolioHistory = [
  { title: 'job1', id: 'job1', content: 'job1content' },
  { title: 'job2', id: 'job2', content: 'job2content' },
  { title: 'job3', id: 'job3', content: 'job3content' },
  { title: 'job4', id: 'job4', content: 'job4content' }
]

const StyledWorkWrapper = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0px auto;
`

const StyledCardWrapper = styled.div`
  padding-top: 3rem;
`

const PortfolioPage: FC<{}> = () => {
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
