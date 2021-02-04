import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { Hamburger } from '../Hamburger'

describe('Hamburger', () => {
  beforeEach(() => jest.clearAllMocks())
  test('renders Hamburger', () => {
    render(<Hamburger active={false} toggleHamburger={jest.fn()} />)

    expect(screen.getByTestId('hamburger')).toBeTruthy()
  })
  test('handles onClick', () => {
    const spy = jest.fn()

    render(<Hamburger active={false} toggleHamburger={spy} />)

    fireEvent.click(screen.getByTestId('hamburger'))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
