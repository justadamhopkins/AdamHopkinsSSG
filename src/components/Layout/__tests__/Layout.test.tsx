import React from 'react'
import { screen, render } from '@testing-library/react'
import { Layout } from '../Layout'

describe('Layout', () => {
  beforeEach(() => jest.clearAllMocks())

  test('renders Layout', () => {
    render(
      <Layout>
        <div>children</div>
      </Layout>
    )

    expect(screen.getByText('children')).toBeTruthy()
  })
})
