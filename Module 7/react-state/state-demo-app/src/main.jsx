import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Employee from './Employee'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Employee />
  </StrictMode>,
)
