import React from 'react'
import logo from './assets/image/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='nav navbar navbar-expand-lg p-4 justify-around'>
        <div className='navbar-brand'>
          <img src={logo} alt="" />
        </div>
        
        <ul className='navbar-nav gap-x-11'>
          <li className='nav-item'><Link className='nav-link font-semibold hover:text-rose-400' style={{fontSize:"18px"}}>Home</Link></li>
          <li className='nav-item'><Link className='nav-link font-semibold hover:text-rose-400' style={{fontSize:"18px"}}>About Us</Link></li>
          <li className='nav-item'><Link className='nav-link font-semibold hover:text-rose-400' style={{fontSize:"18px"}}>Menu</Link></li>
          <li className='nav-item'><Link className='nav-link font-semibold hover:text-rose-400' style={{fontSize:"18px"}}>Blog</Link></li>
        </ul>

        <button className='btn btn-transparent border-black font-semibold hover:bg-rose-300'>Make a Reservation</button>
      </nav>
    </>
  )
}
