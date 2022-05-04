import * as C from './style'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import logo from 'ui/assets/markee-logo.png'
import sheet from 'ui/assets/sheet.svg'
import sheetActive from 'ui/assets/file-text.png'
import { item } from 'data/item'
import { MarkeeItem } from 'resources/files/type'
import { StatusIcon } from 'ui/assets/statusIcon'

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
      <C.Button onClick={handleCreateNewFile}>+ Adicionar arquivo</C.Button>
      <C.SidebarList>
        {files.map((file) => (
          <C.SidebarItem key={file.id} active={file.active}>
            <C.SidebarItemLink
              href={`/item/${file.id}`}
            >
              <img src={`${!file.active ? sheet : sheetActive}`} alt='folha de papel' />
              {file.name}
            </C.SidebarItemLink>
            {file.active && <StatusIcon status={file.status} />}
            {!file.active && <C.RemoveButton>x</C.RemoveButton>}
          </C.SidebarItem>))}
      </C.SidebarList>
    </C.Container>
  )
}
