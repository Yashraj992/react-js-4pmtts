import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AddEmployee from '../AddEmployee'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addemp from '../Addemp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AddEmployee /> */}
    <Addemp />
  </StrictMode>,
)
