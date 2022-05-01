import * as C from './style'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import logo from 'ui/assets/markee-logo.png'
import { SidebarItem } from 'components/sidebarItem'
import { item } from 'data/item'
import { MarkeeItem } from 'resources/files/type'

export const Sidebar = () => {
  const [files, setFiles] = useState<MarkeeItem[]>(item)

  const handleCreateNewFile = () => {
    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'Sem Título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  return (
    <C.Container>
      <C.Logo>
        <img src={logo} alt='Logo Markee' />
      </C.Logo>
      <C.Divider>
        <span>Arquivos</span>
        <hr />
      </C.Divider>
      <C.Button onClick={handleCreateNewFile} >+ Adicionar arquivo</C.Button>
      {files.map((file) => <SidebarItem key={file.id} name={file.name} active={file.active} status={file.status} id={file.id} content='' />)}
    </C.Container>
  )
}
