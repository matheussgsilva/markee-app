import * as C from './style'

import sheet from 'assets/sheet.svg'

type Props =
 {
   name : string,
 }
export const SidebarItem = ({ name }: Props) => {
  return (
    <C.Container>
      <li>
        <a href='/'><img src={sheet} alt='folha de papel' />{name}</a>
        <button>x</button>
      </li>
    </C.Container>
  )
}
