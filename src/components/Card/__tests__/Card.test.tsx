import React from 'react'
import { screen, render } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  test('renders Card', () => {
    render(<Card />)

    expect(screen.getByText('card')).toBeTruthy()
  })
})
