import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { SiteHelmet } from '../components/SiteHelmet/SiteHelmet'
import { Title } from '../components/Title/Title'
import { CardList } from '../components/Card/Card'
import { Modal } from '../components/Modal/Modal'
import { portfolioDescriptions } from '../utils/portfolioData/portfolioDescriptions'

const StyledWorkWrapper = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0px auto;
`

const StyledCardWrapper = styled.div`
  padding-top: 3rem;
`

export type ModalState = { id: string | null; isModalOpen: boolean }

const WorkPage: FC<{}> = () => {
  const [modalState, setModalState] = useState({ isModalOpen: false, id: null })

  return (
    <>
      <SiteHelmet pageTitle='Portfolio' />
      <StyledWorkWrapper>
        <Title delay={2}>Portfolio</Title>
        <StyledCardWrapper>
          <CardList setModalState={setModalState} />
        </StyledCardWrapper>
        <Modal modalState={modalState} setModalState={setModalState}>
          <div>{portfolioDescriptions[modalState.id]}</div>
        </Modal>
      </StyledWorkWrapper>
    </>
  )
}

export default WorkPage
