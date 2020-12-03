import React, { FC } from 'react'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'

const HomePage: FC<{}> = () => {
  return (
    <>
      <SiteHelmet pageTitle='Portfolio home page' />
      <h1>Hi people</h1>
      <p>Now go build something great.</p>
    </>
  )
}

export default HomePage
