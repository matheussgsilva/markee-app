import * as C from './style'

import sheet from 'ui/assets/sheet.svg'
import sheetActive from 'ui/assets/file-text.png'
import { StatusIcon } from 'ui/assets/statusIcon'
import { MarkeeItem } from 'resources/files/type'

export const SidebarItem = ({ name, active, status, id }: MarkeeItem) => {
  console.log(active, status)
  return (
    <C.Container active={active}>
      <li>
        <a href={`/data/${id}`}><img src={`${!active ? sheet : sheetActive}`} alt='folha de papel' />{name}</a>
        {!active && <button>x</button>}
        {active && <StatusIcon status={status} />}
      </li>
    </C.Container>
  )
}
