import * as C from './style'
import { MouseEvent, useState } from 'react'

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
  const [showSidebar, setShowSidebar] = useState(false)
  const filesLength = files.length

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <C.Container setSidebar={showSidebar}>
      <C.Logo>
        <img src={logo} alt='Logo Markee' />
      </C.Logo>
      <C.ShowButton onClick={handleShowSidebar} setSidebar={showSidebar} />
      <C.Divider setSidebar={showSidebar}>
        <span>Arquivos</span>
        <hr />
      </C.Divider>
      <C.Button onClick={onNewFile} setSidebar={showSidebar}>+ <span>Adicionar arquivo</span></C.Button>
      <C.SidebarListArea showScroll={filesLength}>
        <C.SidebarList>
          {files.map((file) => (
            <C.SidebarItem key={file.id} active={file.active}>
              <C.SidebarItemLink
                href={`/item/${file.id}`}
                onClick={onSelectFile(file.id)}
                setSidebar={showSidebar}
              >
                <img src={`${!file.active ? sheet : sheetActive}`} alt='folha de papel' />
                <span>
                  {file.name.length < 15 ? file.name : `${file.name.slice(0, 15)} . . .`}
                </span>
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
      </C.SidebarListArea>
    </C.Container>
  )
}
