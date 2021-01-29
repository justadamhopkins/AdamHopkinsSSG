import React, { FC } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'

const Header = styled.h1`
  font-family: 'LeagueSpartanBold';
`

const HomePage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio home page' />
    </>
  )
}

export default HomePage
