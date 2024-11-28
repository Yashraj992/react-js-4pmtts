import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App1 from './Employee.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App1 />
  </StrictMode>,
)
