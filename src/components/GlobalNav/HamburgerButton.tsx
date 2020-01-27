import React from 'react'
import styled from 'styled-components'

import Opener from '../../state/SideMenuManager'
import { faBars } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 32px;
`

const HamburgerButton: React.FC<ContainerProps> = () => {
  const opener = Opener.useContainer()
  const toggle = () => {
    opener.toggle()
  }
  return <StyledComponent toggle={toggle} />
}

export default HamburgerButton
