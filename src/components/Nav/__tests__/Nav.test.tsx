import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { Nav, pages } from '../Nav'

describe('Nav', () => {
  beforeEach(() => jest.clearAllMocks())

  test('renders Nav', () => {
    render(<Nav isNavOpen={false} toggleNav={jest.fn()} />)

    pages.forEach(pageTitle => {
      expect(pageTitle).toBeTruthy()
    })
  })
  test('handles onClick', () => {
    const spy = jest.fn()

    render(<Nav isNavOpen={false} toggleNav={spy} />)

    fireEvent.click(screen.getByText('Contact'))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
