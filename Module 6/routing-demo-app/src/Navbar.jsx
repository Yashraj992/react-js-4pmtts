import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Nav className='nav navbar bg-transparent'>
        <Link className='navbar-brand'>Escape.</Link>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="categories">Categories</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
        </ul>
      </Nav>
    </div>
  )
}
