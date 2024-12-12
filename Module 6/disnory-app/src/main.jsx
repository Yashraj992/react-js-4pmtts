import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Disc from './Disc'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Disc />
  </StrictMode>,
)
