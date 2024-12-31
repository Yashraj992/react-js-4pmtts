import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'aos/dist/aos.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Blog from './Blog'
import PageNotFound from './PageNotFound'
import Menu2 from './Menu2'
import Reservation from './Reservation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/pastry' element={<Menu2 />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
