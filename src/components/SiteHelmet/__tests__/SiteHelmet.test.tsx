import React from 'react'
import { render, screen } from '@testing-library/react'
import { SiteHelmet } from '../SiteHelmet'
import { useStaticQuery } from 'gatsby'

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
  test('renders', () => {
    const { debug } = render(<SiteHelmet pageTitle='testme' />)

    console.log(debug())
  })
})
