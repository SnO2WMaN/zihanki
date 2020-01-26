import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons'

type ContainerProps = { icon: IconDefinition }
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = ({ className, children, icon }) => (
  <li className={className}>
    <div className="icon">
      <FontAwesomeIcon icon={icon} fixedWidth />
    </div>
    <p>{children}</p>
  </li>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  box-sizing: content-box;
  height: 24px;
  padding: 16px 32px 16px 24px;
  > .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }
  > p {
    font-family: var(--sans-serif);
  }
`

const Column: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Column
