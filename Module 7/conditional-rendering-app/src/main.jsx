import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Looping from './Looping'
// import Fillter from './Fillter'
// import Ternary from './Ternary'
// import Nestedif from './Nestedif'
// import If from './If'
// import IfElseIf from './IfElseIf'
// import Loop from './Loop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <If /> */}
    {/* <IfElseIf /> */}
    {/* <Loop /> */}
    {/* <Nestedif /> */}
    {/* <Ternary /> */}
    {/* <Fillter /> */}
    <Looping />
  </StrictMode>,
)
