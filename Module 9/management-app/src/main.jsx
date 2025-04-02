import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from './Add'
import Delete from './Delete'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Add />}/>
        <Route path='/delete/:id' element={<Delete />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
