import React from 'react'
import Navbar from './Navbar'
import Foooter from './Foooter'
import { Container } from 'react-bootstrap'
import img1 from './assets/img/person-about.jpg'

export default function About() {
  return (
    <div>
      <Navbar />
      <Container fluid className='about shadow'>
        <h1 className='text-gray text-center' style={{ paddingTop: "150px", fontSize: "50px" }}>We Love Writing</h1>
      </Container>

      <Container className='mt-5' style={{paddingTop:"50px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img1} class="img-fluid rounded" alt="..." style={{height:"350px"}}/>
          </div>
          <div class="col-md-8">
            <div class="card-body ms-5">
              <p class="card-text mt-5">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
              <p class="card-text">A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
              <p class="card-text">Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
            </div>
          </div>
        </div>  
      </Container>
      <br /><br /><br />

      <Foooter />
    </div>
  )
}
