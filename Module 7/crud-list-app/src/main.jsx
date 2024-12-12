import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'
import DeleteData from './DeleteData.jsx'
import EditData from './EditData.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/delete-data/:id' element={<DeleteData />}/>
        <Route path='/edit-data/:id' element={<EditData />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
