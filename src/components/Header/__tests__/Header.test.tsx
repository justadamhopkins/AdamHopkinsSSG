import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
  beforeEach(() => jest.clearAllMocks())

  const { getByTestId, getByText } = screen
  test('renders Header', () => {
    const spy = jest.fn()

    render(<Header toggleTheme={spy} />)

    expect(getByTestId('checkBox')).toBeTruthy()
    expect(getByTestId('hamburger')).toBeTruthy()
    expect(getByText('About')).toBeTruthy()
  })
  test('toggles theme', () => {
    const spy = jest.fn()

    render(<Header toggleTheme={spy} />)

    fireEvent.click(getByTestId('checkBox'))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
