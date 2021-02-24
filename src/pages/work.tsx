import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { Title } from '../components/Title/Title'
import { Card } from '../components/Card/Card'

const StyledWorkWrapper = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0px auto;
`

const StyledCardWrapper = styled.div`
  padding-top: 3rem;
  ul {
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
  }
`

const WorkPage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio work page' />
      <StyledWorkWrapper>
        <Title delay={2}>My Portfolio</Title>
        <StyledCardWrapper>
          <ul>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
          </ul>
        </StyledCardWrapper>
      </StyledWorkWrapper>
    </>
  )
}

export default WorkPage
