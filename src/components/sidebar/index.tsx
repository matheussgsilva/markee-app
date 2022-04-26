import * as C from './style'

import logo from 'assets/markee-logo.png'
import { SidebarItem } from 'components/sidebarItem'

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
      <SidebarItem name='Readme.md' active={false} status='saved' />
      <SidebarItem name='License.md' active={false} status='saved' />
      <SidebarItem name='Links.md' active={true} status='saving' />
    </C.Container>
  )
}
