import React from 'react'
import { Nav, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Nav className='nav navbar bg-dark text-white'>
        <NavbarBrand className='navbar-brand mt-3 text-white'>Hello</NavbarBrand>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>contact</Link></li>
        </ul>
      </Nav>
    </div>
  )
}
