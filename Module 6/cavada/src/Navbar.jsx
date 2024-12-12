import React from 'react'
import logo from './assets/img/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className='nav navbar container mt-2'>
        <img src={logo} alt="" className='img-fluid'/>

        <ul className='flex gap-x-16 -ms-96 font-semibold pt-2'>
            <li><Link to="/" className='no-underline text-black'>Home</Link></li>
            <li><Link to="/about-us" className='no-underline text-black'>About Us</Link></li>
            <li><Link to="/menu" className='no-underline text-black'>Menu</Link></li>
            <li><Link to="/blog" className='no-underline text-black'>Blog</Link></li>
        </ul>

        <button className='hover:bg-pink-200 p-2 border-1 border-black rounded font-semibold'>Make a Reservation</button>
      </nav>
    </div>
  )
}
