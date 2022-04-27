import * as C from './style'

import fileSheet from 'assets/file-text.png'

export const MainContent = () => {
  return (
    <C.Container>
      <C.ContentLeft>
        <C.LeftHeader>
          <img src={fileSheet} alt='folha de papel' />
          <C.Input autoFocus />
        </C.LeftHeader>
      </C.ContentLeft>
      <C.ContentRight>
        conteúdo
      </C.ContentRight>
    </C.Container>
  )
}
