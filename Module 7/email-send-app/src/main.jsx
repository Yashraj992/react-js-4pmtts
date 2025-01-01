import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CustomerFeedback from './CustomerFeedback'
import DeleteData from './DeleteData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<CustomerFeedback />}/>
        <Route path='/delete-data/:id' element={<DeleteData />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
