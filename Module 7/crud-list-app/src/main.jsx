import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../src/assets/index.css"
import Input from './Components/Input'
import DeleteData from './Components/DeleteData'
import EditData from './Components/EditData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Input />}/>
        <Route path='/delete-data/:id' element={<DeleteData />}/>
        <Route path='/edit-data/:id' element={<EditData />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
