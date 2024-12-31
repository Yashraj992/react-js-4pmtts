import React from 'react'
import logo from './assets/img/logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="footer container mt-24 pb-32">
        <img src={logo} alt="" />

        <div className="footer-list flex justify-between mt-5">
          <div className="list1">
            <h4 className='p-1'>Menu</h4>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/blog">BLog</Link></li>
            <li><Link to="/reservation">REservation</Link></li>
          </div>

          <div className="list1">
            <h4 className='p-1'>Utility Pages</h4>
            <li><Link>Get Stared</Link></li>
            <li><Link>Changelog</Link></li>
            <li><Link>Licenses</Link></li>
            <li><Link>StyleGuide</Link></li>
            <li><Link>Components</Link></li>
          </div>

          <div className="list1">
            <h4 className='p-1'>Contacts</h4>
            <li><Link>1127 Santa Monica Blvd</Link></li>
            <li><Link>+91 9754684568</Link></li>
            <li><Link>google.com</Link></li>
            <li className='mt-2 p-1'>
              <span className='bi bi-linkedin text-white p-2 rounded-3xl' style={{backgroundColor:"#FF7377"}}></span>
              <span className='bi bi-messenger text-white p-2 rounded-3xl ms-2' style={{backgroundColor:"#FF7377"}}></span>
              <span className='bi bi-facebook text-white p-2 rounded-3xl ms-2' style={{backgroundColor:"#FF7377"}}></span>
              <span className='bi bi-instagram text-white p-2 rounded-3xl ms-2' style={{backgroundColor:"#FF7377"}}></span>
              <span className='bi bi-twitter text-white p-2 rounded-3xl ms-2' style={{backgroundColor:"#FF7377"}}></span>
            </li>
          </div>

          <div className="list1">
            <h4 className='p-1'>Subscribe to newsletter</h4>
            <li>Contact us if you need help with anything.</li>
            <input type="email" placeholder='Email Address' className='form-control mt-3' />
            <input type="submit" value="submit" className='btn text-white mt-3 w-full' style={{ backgroundColor: "#FF7377" }} />
          </div>
        </div>
      </div>
    </>
  )
}
