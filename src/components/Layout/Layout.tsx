import React, { FC } from 'react'
import { GlobalFontStyles } from '../../styles/fonts/fonts'

export const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <GlobalFontStyles />
      {children}
    </>
  )
}
