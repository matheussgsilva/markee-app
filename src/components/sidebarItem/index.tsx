import * as C from './style'

import sheet from 'assets/sheet.svg'

type Props =
 {
   name : string
   active: boolean
   status: 'editing' | 'saving' | 'saved'
 }
export const SidebarItem = ({ name, active, status }: Props) => {
  return (
    <C.Container>
      <li>
        <a href='/'><img src={sheet} alt='folha de papel' />{name}</a>
        <button>x</button>
      </li>
    </C.Container>
  )
}
