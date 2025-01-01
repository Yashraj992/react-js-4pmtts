import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddTask from './AddTask'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import DeleteData from './DeleteData'
import EditData from './EditData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<AddTask />}/>
        <Route path='/delete-data/:id' element={<DeleteData />}/>
        <Route path='/edit-data/:id' element={<EditData />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
