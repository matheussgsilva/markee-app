import styled, { keyframes } from 'styled-components/macro'
import { Status } from 'resources/files/type'

import { ReactComponent as Load } from 'ui/assets/load.svg'
import { ReactComponent as Check } from 'ui/assets/checked.svg'
import { ReactComponent as Dot } from 'ui/assets/dot.svg'

export type StatusIconProps = {
    status: Status
    className?: string
}

export const StatusIcon = ({ status = 'saved', className }: StatusIconProps) => {
  const Comp = {
    saving: Loading,
    saved: Check,
    editing: Edit,
  }[status]

  return <Comp className={className} />
}

const Edit = styled(Dot)`
    margin-right: 2px;
    width: 6px;
    height: 6px;
`

const rotation = keyframes`
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(359deg);
    }
`

const Loading = styled(Load)`
    animation: ${rotation} 1s infinite linear;
`
