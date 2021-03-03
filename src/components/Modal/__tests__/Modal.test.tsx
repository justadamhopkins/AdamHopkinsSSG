import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { Modal } from '../Modal'
import { MockTestRenderer } from '../../../utils/testHelpers/MockTestRenderer'

const renderModal = (props: any) => {
  return render(
    <MockTestRenderer {...props}>
      <Modal />
    </MockTestRenderer>
  )
}

describe('Modal', () => {
  beforeEach(() => jest.clearAllMocks())

  const showModalProps = { modalContent: 'i am a modal', showModal: true }

  test('renders no modal as default', () => {
    renderModal({ modalContent: 'i am a modal' })

    expect(screen.queryByText('i am a modal')).toBe(null)
    expect(screen.queryByTitle('close')).toBe(null)
  })
  test('renders modal when show modal is truthy', () => {
    renderModal({ ...showModalProps })

    expect(screen.getByText('i am a modal')).toBeTruthy()
    expect(screen.getByTitle('close')).toBeTruthy()
  })
  test('closes modal on click', () => {
    const spy = jest.fn()

    renderModal({ ...showModalProps, closeModal: spy })

    fireEvent.click(screen.getByTitle('close'))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
