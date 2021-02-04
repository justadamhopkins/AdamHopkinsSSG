import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { SwitchToggle } from '../SwitchToggle'

describe('SwitchToggle', () => {
  beforeEach(() => jest.clearAllMocks())
  test('renders SwitchToggle', () => {
    const spy = jest.fn()

    render(<SwitchToggle toggleTheme={spy} />)

    fireEvent.click(screen.getByTestId('checkBox'))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
