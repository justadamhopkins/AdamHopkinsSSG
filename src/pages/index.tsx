import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { GlobalFontStyles } from '../styles/fonts/fonts'

const Header = styled.h1`
  font-family: 'LeagueSpartanBold';
`

const HomePage: FC<{}> = () => {
  return (
    <>
      <GlobalFontStyles />
      <SiteHelmet pageTitle='Portfolio home page' />
      <Header>Hi people</Header>
      <p>Now go build something great.</p>
    </>
  )
}

export default HomePage
