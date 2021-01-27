import React from 'react'
import styled from 'styled-components'

export const ThemeSwitch = styled.div`
  display: flex;
  flex-direction: column;
`

export const ToggleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 30px;
  background: var(--secondaryBackground);
  display: block;
  border-radius: 100px;
  position: relative;
  :after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.7s;
  }
  :active:after {
    width: 50px;
  }
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + ${ToggleLabel} {
    background: var(--secondaryBackground);
  }
  :checked + ${ToggleLabel}:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`

type Props = {
  toggleTheme(): void
}

export const SwitchToggle: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <ThemeSwitch>
      <HiddenCheckbox
        id='switch'
        data-testid='checkBox'
        onChange={toggleTheme}
      />
      <ToggleLabel htmlFor='switch' />
    </ThemeSwitch>
  )
}
