import React from 'react'
import styled from 'styled-components'

type ContainerProps = {}
type Props = {} & ContainerProps

const Component: React.FC<Props> = props => (
  <>
    <p>{props.children}</p>
  </>
)

const StyledComponent = styled(Component)`
  color: var(--text);
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent />
}

export default Container
