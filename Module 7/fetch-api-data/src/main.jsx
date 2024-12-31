import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import User from './User'
// import FetchData from './FetchData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FetchData /> */}
    <User />
  </StrictMode>,
)
