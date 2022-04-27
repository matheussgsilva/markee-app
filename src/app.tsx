import { MainContent } from 'components/mainContent'
import { Sidebar } from 'components/sidebar'

import * as C from './style'

export function App () {
  return (
    <C.Container>
      <Sidebar />
      <MainContent />
    </C.Container>
  )
}
