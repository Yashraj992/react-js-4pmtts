import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import User from './User'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <User />
  </StrictMode>,
)
