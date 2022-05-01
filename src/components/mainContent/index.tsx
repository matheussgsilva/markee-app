import { useState, ChangeEvent } from 'react'
import { marked } from 'marked'
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

export const MainContent = () => {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <C.Container>
      <C.ContentLeft>
        <C.LeftHeader>
          <img src={fileSheet} alt='folha de papel' />
          <C.Input defaultValue='Sem título' autoFocus />
        </C.LeftHeader>
        <C.TextArea
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChange}
        />
      </C.ContentLeft>
      <C.ContentRight>
        <C.Content dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </C.ContentRight>
    </C.Container>
  )
}
