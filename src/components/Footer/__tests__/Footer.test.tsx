import React from 'react'
import { screen, render } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
  test('renders Footer', () => {
    render(<Footer />)

    expect(screen.getByText('Adam Hopkins', { exact: false })).toBeTruthy()
  })
})
