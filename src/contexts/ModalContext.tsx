import React, { createContext, FC, useContext, useState } from 'react'
import { Modal } from '../components/Modal/Modal'

export interface ModalContextInitialState {
  closeModal(): void
  triggerModal(content: string): void
  modalContent: string | null
  showModal: boolean
}

export const ModalContext = createContext<ModalContextInitialState>({
  closeModal: () => {},
  triggerModal: (content: string) => content,
  modalContent: null,
  showModal: false
})

export const ModalProvider: FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const closeModal = () => {
    setShowModal(false)
    setModalContent('')
  }

  const triggerModal = (content: string) => {
    setShowModal(!showModal)
    setModalContent(content)
  }

  return (
    <ModalContext.Provider
      value={{ closeModal, triggerModal, modalContent, showModal }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  )
}

export const useModalConfig = () =>
  useContext(ModalContext) as ModalContextInitialState
