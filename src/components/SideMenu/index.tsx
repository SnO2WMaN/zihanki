import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { faMoneyBillWave, faCog } from '@fortawesome/pro-solid-svg-icons'
import Column from './Column'
import CloseFader from './CloseFader'
import Opener from '../../state/SideMenuManager'

type ContainerProps = {}
type Props = {
  className: string
  active: boolean
} & ContainerProps

const Component: React.FC<Props> = ({ className, active }) => {
  const { t } = useTranslation()
  return (
    <>
      <nav
        className={className}
        style={{
          visibility: active ? 'visible' : 'hidden',
        }}
      >
        <ul>
          {[
            {
              text: t('purchase-record'),
              key: 'purchase-record',
              icon: faMoneyBillWave,
            },
            { text: t('settings'), key: 'settings', icon: faCog },
          ].map(({ text, key, icon }) => (
            <Column key={key} icon={icon}>
              {text}
            </Column>
          ))}
        </ul>
      </nav>
    </>
  )
}

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 60vw;
  height: 100vh;
  padding-top: 64px;
  background: white;
  box-shadow: 8px 0 32px 8px var(--component-shadow-color);
  z-index: 101;
`

const SideMenu: React.FC<ContainerProps> = props => {
  const opener = Opener.useContainer()
  return <StyledComponent {...props} active={opener.isOpen} />
}

export default SideMenu
