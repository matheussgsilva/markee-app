import * as C from './style'

import logo from 'ui/assets/markee-logo.png'
import { SidebarItem } from 'components/sidebarItem'
import { item } from 'data/item'

export const Sidebar = () => {
  return (
    <C.Container>
      <C.Logo>
        <img src={logo} alt='Logo Markee' />
      </C.Logo>
      <C.Divider>
        <span>Arquivos</span>
        <hr />
      </C.Divider>
      <C.Button>+ Adicionar arquivo</C.Button>
      {item.map((item) => <SidebarItem key={item.id} name={item.name} active={item.active} status={item.status} id={item.id} content='' />)}
    </C.Container>
  )
}
