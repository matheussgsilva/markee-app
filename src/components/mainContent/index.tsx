import * as C from './style'

import fileSheet from 'assets/text-file.png'

export const MainContent = () => {
  return (
    <C.Container>
      <C.ContentLeft>
        <C.LeftHeader>
          <img src={fileSheet} alt='folha de papel' />
          <C.Input />
        </C.LeftHeader>
      </C.ContentLeft>
      <C.ContentRight />
    </C.Container>
  )
}
