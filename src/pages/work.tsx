import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { Title } from '../components/Title/Title'
import { CardList } from '../components/Card/Card'

const StyledWorkWrapper = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0px auto;
`

const StyledCardWrapper = styled.div`
  padding-top: 3rem;
`

const WorkPage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio work page' />
      <StyledWorkWrapper>
        <Title delay={2}>My Portfolio</Title>
        <StyledCardWrapper>
          <CardList />
        </StyledCardWrapper>
      </StyledWorkWrapper>
    </>
  )
}

export default WorkPage
