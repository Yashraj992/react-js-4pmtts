import React from 'react'
import { Container, Row } from 'react-bootstrap'
import img1 from './assets/image/main-logo.png'

export default function Footer() {
  return (
    <div>
      <Container className='foooter text-center'>
        <h1 className='mt-5'>Feel Free To Contact Us</h1>
        <p>If you have any projects in mind say hello at contact@example.com or just call me at <span className='text-black fw-semibold'>+91 9723411456</span>.</p>
        <button className='btn btn-dark px-5 py-3 rounded-pill'>Contact Us</button>

        <Row className='f-content'>
          <div className="col-md-3">
            <img src={img1} alt="" />
            <p>Mi facilisis facilisis orci vitae. Cum nisi morbi integer tincidunt ornare ac praesent in. Dolor tempus arcu sit quis nunc arcu facilisis quis eget nisi morbi integer.</p>
            <p>© Copyright 2024. HTML Template by TemplatesJungle</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h5>Social</h5>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>instagram</li>
              <li>Youtube</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div className="col-md-3">
          <h5>Contact Us</h5>
            <ul>
              <li>+91 9723411456</li>
              <li>yashrajsinhpm@gmail.com</li>
              <li>Rajkot, Gujarat, India</li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  )
}
