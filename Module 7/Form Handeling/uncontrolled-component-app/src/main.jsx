import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AddEmployee from './AddEmployee'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Uncontrolled from './Uncontrolled'
// import Controlled from './Controlled'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AddEmployee /> */}
    {/* <Controlled /> */}
    <Uncontrolled />
  </StrictMode>,
)
