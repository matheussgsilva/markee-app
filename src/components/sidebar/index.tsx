import * as C from './style'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from 'ui/assets/markee-logo.png'
import sheet from 'ui/assets/sheet.svg'
import sheetActive from 'ui/assets/file-text.png'
import { MarkeeItem } from 'resources/files/type'
import { StatusIcon } from 'ui/assets/statusIcon'

type SidebarProps = {
  files: MarkeeItem[]
  onNewFile: () => void
  onSelectFile: (id: string) => (e: MouseEvent) => void
  onRemoveFile: (id: string) => void
}

export const Sidebar = ({ files, onNewFile, onSelectFile, onRemoveFile }: SidebarProps) => {
  const navigate = useNavigate()

  return (
    <C.Container>
      <C.Logo>
        <img src={logo} alt='Logo Markee' />
      </C.Logo>
      <C.Divider>
        <span>Arquivos</span>
        <hr />
      </C.Divider>
      <C.Button onClick={onNewFile}>+ Adicionar arquivo</C.Button>
      <C.SidebarList>
        {files.map((file) => (
          <C.SidebarItem key={file.id} active={file.active} onClick={() => navigate(`/files/${file.id}`)}>
            <C.SidebarItemLink
              href={`/item/${file.id}`}
              onClick={onSelectFile(file.id)}
            >
              <img src={`${!file.active ? sheet : sheetActive}`} alt='folha de papel' />
              {file.name}
            </C.SidebarItemLink>
            {file.active && <StatusIcon status={file.status} />}
            {!file.active && (
              <C.RemoveButton
                title={`Remover o arquivo ${file.name}`}
                onClick={() => onRemoveFile(file.id)}
              >x
              </C.RemoveButton>)}
          </C.SidebarItem>))}
      </C.SidebarList>
    </C.Container>
  )
}
