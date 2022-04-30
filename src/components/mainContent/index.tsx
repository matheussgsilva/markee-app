import { useState, ChangeEvent } from 'react'

import * as C from './style'

import fileSheet from 'ui/assets/file-text.png'

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
        <C.Content />
      </C.ContentRight>
    </C.Container>
  )
}
