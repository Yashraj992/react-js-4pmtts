import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Featured from './components/Featured'
import Discount from './components/Discount'
import NewBook from './components/NewBook'
import Testimonial from './components/Testimonial'
import Search from './components/Search'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/discount' element={<Discount />} />
        <Route path='/new-book' element={<NewBook />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
