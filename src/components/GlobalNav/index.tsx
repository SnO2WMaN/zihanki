import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { faMoneyBillWave, faCog } from '@fortawesome/pro-light-svg-icons'
import HamburgerButton from './HamburgerButton'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <div className="width-fixer">
        <HamburgerButton />
      </div>
    </nav>
  )
}

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  box-shadow: 0 8px 32px 8px var(--component-shadow-color);
  .width-fixer {
    display: flex;
    align-items: center;
    max-width: 360px;
    height: 100%;
    margin: 0 auto;
  }
`

const GlobalNav: React.FC<ContainerProps> = props => {
  return <StyledComponent />
}

export default GlobalNav
