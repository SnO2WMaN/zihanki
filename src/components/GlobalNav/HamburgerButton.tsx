import React, { useState, useCallback, useContext, createContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-solid-svg-icons'

import Opener from '../../state/SideMenuManager'

type ContainerProps = {}
type Props = {
  className: string
  toggle(): void
} & ContainerProps

const Component: React.FC<Props> = ({ className, toggle }) => {
  return (
    <div className={className} onClick={toggle}>
      <FontAwesomeIcon icon={faBars} className="icon"></FontAwesomeIcon>
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`

const HamburgerButton: React.FC<ContainerProps> = props => {
  const opener = Opener.useContainer()
  const toggle = () => {
    opener.toggle()
  }
  return <StyledComponent toggle={toggle} />
}

export default HamburgerButton
