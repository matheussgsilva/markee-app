import { StrictMode } from 'react'
import ReactDom from 'react-dom'

import { Root } from './root'

ReactDom.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root'),
)
