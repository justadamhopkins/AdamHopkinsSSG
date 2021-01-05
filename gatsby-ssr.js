import React from 'react'
import { Layout } from './src/components/Layout/Layout'

export function wrapRootElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
