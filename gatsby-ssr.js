import React from 'react'
import { Layout } from './src/components/Layout/Layout'
import { ModalProvider } from './src/contexts/ModalContext'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <ModalProvider>{element}</ModalProvider>
}
