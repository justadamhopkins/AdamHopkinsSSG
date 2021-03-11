import React, { FC } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useModalConfig } from '../../contexts/ModalContext'
import { breakpoint } from '../../styles/ui/breakpoints'

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
`
const ModalContainer = styled(motion.div)`
  width: 100%;
  height: 500px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  ${breakpoint.sm`
    width: 75%;
    height: 300px;
  `}
  ${breakpoint.md`
    width: 50%;
  `}
  p {
    font-size: 1.8rem;
  }
`
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 }
}

const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '50%' },
  exit: { top: '-50%' }
}

export const Modal: FC = () => {
  const { closeModal, showModal, modalContent } = useModalConfig()

  return (
    <AnimatePresence>
      {showModal && (
        <Overlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant}>
            <CloseButton
              onClick={closeModal}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20.39 20.39'
            >
              <title>close</title>
              <line
                x1='19.39'
                y1='19.39'
                x2='1'
                y2='1'
                fill='none'
                stroke='#5c3aff'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='2'
              />
              <line
                x1='1'
                y1='19.39'
                x2='19.39'
                y2='1'
                fill='none'
                stroke='#5c3aff'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='2'
              />
            </CloseButton>
            <p>{modalContent}</p>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}
