import { MainContent } from 'components/mainContent'
import { Sidebar } from 'components/sidebar'
import { useFile } from 'resources/files/use-file'

import * as C from './style'

export function App () {
  const {
    handleCreateNewFile,
    handleRemoveFile,
    handleSelectFile,
    handleUpdateFileContent,
    handleUpdateFileName,
    inputRef,
    files,
  } = useFile()

  return (
    <C.Container>
      <Sidebar
        files={files}
        onNewFile={handleCreateNewFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
      />
      <MainContent
        inputRef={inputRef}
        file={files.find(file => file.active === true)}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent}
        onNewFile={handleCreateNewFile}
      />
    </C.Container>
  )
}
