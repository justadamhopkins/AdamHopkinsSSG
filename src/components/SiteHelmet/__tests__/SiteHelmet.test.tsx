import React from 'react'
import { render } from '@testing-library/react'
import { SiteHelmet } from '../SiteHelmet'
import { useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

describe('SiteHelmet', () => {
  beforeAll(() => {
    const query = useStaticQuery as jest.Mock
    query.mockReturnValue({
      site: {
        siteMetadata: {
          title: `test title`,
          description: `test description`
        }
      }
    })
  })
  test('renders helmet', () => {
    render(<SiteHelmet pageTitle='testme' />)

    const helmet = Helmet.peek()

    expect(helmet.title).toEqual('testme - test title')
  })
})
