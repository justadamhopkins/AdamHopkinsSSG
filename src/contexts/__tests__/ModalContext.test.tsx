import React from 'react'
import { render, screen } from '@testing-library/react'
import { ModalProvider } from '../ModalContext'

const mockModalContext = () => {
  return render(
    <ModalProvider>
      <div>Mock App</div>
    </ModalProvider>
  )
}

describe('ModalContext', () => {
  test('renders the app with context', () => {
    mockModalContext()

    expect(screen.getByText('Mock App')).toBeTruthy()
  })
})
