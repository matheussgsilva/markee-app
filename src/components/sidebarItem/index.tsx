import * as C from './style'

import sheet from 'assets/sheet.svg'
import { MarkeeItem } from 'resources/files/type'

export const SidebarItem = ({ name, active, status, id }: MarkeeItem) => {
  console.log(active, status)
  return (
    <C.Container>
      <li>
        <a href={`/data/${id}`}><img src={sheet} alt='folha de papel' />{name}</a>
        <button>x</button>
      </li>
    </C.Container>
  )
}
