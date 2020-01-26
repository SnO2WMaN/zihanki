import React from 'react'
import styled from 'styled-components'
import Opener from '../../state/SideMenuManager'

type ContainerProps = {}
type Props = {
  className: string
  close(): void
  active: boolean
} & ContainerProps

const Component: React.FC<Props> = ({ className, children, close, active }) => (
  <div
    className={className}
    onClick={close}
    style={{
      visibility: active ? 'visible' : 'hidden',
    }}
  ></div>
)

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: #000a;
`

const CloseFader: React.FC<ContainerProps> = props => {
  const opener = Opener.useContainer()
  return (
    <StyledComponent {...props} active={opener.isOpen} close={opener.close} />
  )
}

export default CloseFader
