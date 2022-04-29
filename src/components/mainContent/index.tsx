import * as C from './style'

import fileSheet from 'ui/assets/file-text.png'

export const MainContent = () => {
  return (
    <C.Container>
      <C.ContentLeft>
        <C.LeftHeader>
          <img src={fileSheet} alt='folha de papel' />
          <C.Input defaultValue='Sem título' autoFocus />
        </C.LeftHeader>
        <C.TextArea placeholder='Digite aqui seu markdown' />
      </C.ContentLeft>
      <C.ContentRight>
        <C.Content>
          <h1>Readme.md</h1>
          <p>Lorem ipsum dolor sit amet simet</p>
        </C.Content>
      </C.ContentRight>
    </C.Container>
  )
}
