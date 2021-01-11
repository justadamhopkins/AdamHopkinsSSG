import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'

const Header = styled.h1`
  font-family: 'LeagueSpartanBold';
`

const WorkPage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio work page' />
      <Header>WorkPage</Header>
    </>
  )
}

export default WorkPage
