import React from 'react'
import { screen, render } from '@testing-library/react'
import { Title } from '../Title'

describe('Title', () => {
  test('renders Title', () => {
    render(<Title>Adam</Title>)

    expect(screen.getByText('Adam')).toBeTruthy()
  })
})
