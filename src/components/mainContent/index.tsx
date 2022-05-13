import { ChangeEvent, RefObject } from 'react'
import { marked } from 'marked'
import { MarkeeItem } from 'resources/files/type'
import 'highlight.js/styles/github.css'

import * as C from './style'

import fileSheet from 'ui/assets/file-text.png'

import('highlight.js').then(hljs => {
  const hl = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && hl.getLanguage(language)) {
        return hl.highlight(code, { language }).value
      }
      return hl.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  file?: MarkeeItem
  onUpdateFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  onUpdateFileContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const MainContent = ({ inputRef, file, onUpdateFileName, onUpdateFileContent }: ContentProps) => {
  if (!file) {
    return null
  }

  return (
    <C.Container>
      <C.ContentLeft>
        <C.LeftHeader>
          <img src={fileSheet} alt='folha de papel' />
          <C.Input
            ref={inputRef}
            value={file.name}
            onChange={onUpdateFileName(file.id)}
            autoFocus
          />
        </C.LeftHeader>
        <C.TextArea
          placeholder='Digite aqui seu markdown'
          value={file.content}
          onChange={onUpdateFileContent(file.id)}
        />
      </C.ContentLeft>
      <C.ContentRight>
        <C.Content dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
      </C.ContentRight>
      <C.AddButton />
    </C.Container>
  )
}
