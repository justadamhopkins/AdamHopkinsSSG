import React from 'react'
import {
  ModalContext,
  ModalContextInitialState
} from '../../contexts/ModalContext'

export const MockTestRenderer: React.FC<Partial<ModalContextInitialState>> = ({
  closeModal = jest.fn(),
  triggerModal = jest.fn(),
  modalContent = null,
  showModal = false,
  children
}) => {
  return (
    <ModalContext.Provider
      value={{ closeModal, triggerModal, modalContent, showModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
