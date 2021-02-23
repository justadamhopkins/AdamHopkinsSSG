import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { Title } from '../components/Title/Title'

const Header = styled.h1`
  font-family: 'LeagueSpartanBold';
`

const WorkPage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio work page' />
      <Title delay={2}>My Portfolio</Title>
    </>
  )
}

export default WorkPage
