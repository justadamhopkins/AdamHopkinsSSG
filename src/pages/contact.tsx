import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'

const Header = styled.h1`
  font-family: 'LeagueSpartanBold';
`

const ContactPage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio Contact page' />
      <Header>ContactPage</Header>
    </>
  )
}

export default ContactPage
