import React from 'react'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
import Foooter from './Foooter'

export default function Contact() {
  return (
    <div className='bg-body-secondary'>
      <Navbar />

      <Container fluid className='contact shadow'>
        <h1 className='text-white text-center' style={{ paddingTop: "150px", fontSize: "50px" }}>Let's Connect</h1>
      </Container>

      <Container className='contact-detail d-flex mt-5'>
        <div className="c-detail w-50">
          <h3 className='ms-5'>Connect with Us</h3>
          <p className='mt-5 px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <p className='ms-5 mt-5'><i class="bi bi-twitter-x me-3"></i>Follow us on twitter</p>
          <p className='ms-5 mt-2'><i class="bi bi-facebook me-3"></i>Like us on Facebook</p>
          <p className='ms-5 mt-2'><i class="bi bi-instagram me-3"></i>Follow us on instagram</p>
        </div>
        <div className="c-form w-50">
          <h2>Send a Request</h2>
          <form action="" className='form mt-5'>
            <label htmlFor="">Name:</label>
            <input type="text" placeholder='Enter your name' className='form-control p-2'/>

            <label htmlFor="" className='mt-4'>Email Address:</label>
            <input type="text" placeholder='Enter your email address' className='form-control p-2'/>

            <label htmlFor="" className='mt-4'>Message:</label>
            <input type="text" placeholder='Say what you need to say...' className='form-control p-2 f-message'/>

            <button type='submit' className='btn btn-warning px-4 mt-4'>Submit</button>
          </form>
        </div>
      </Container>
      <br /><br /><br />

      <Foooter />
    </div>
  )
}
