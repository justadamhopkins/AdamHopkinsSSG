import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'

const Header = styled.h1`
  font-family: 'LeagueSpartanBold';
`

const AboutPage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio About page' />
      <Header>AboutPage</Header>
    </>
  )
}

export default AboutPage
