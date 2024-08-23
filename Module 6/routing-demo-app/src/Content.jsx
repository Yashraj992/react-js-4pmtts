import React from 'react'
import Navbar from './Navbar'
import Foooter from './Foooter'
import { Container, Nav, Row} from 'react-bootstrap'
import img1 from './assets/img/card-1.jpg'
import img2 from './assets/img/card-2.jpg'
import img3 from './assets/img/card-3.jpg'
import img4 from './assets/img/card-4.jpg'
import img5 from './assets/img/card-5.jpg'
import img6 from './assets/img/card-6.jpg'

export default function Content() {
  return (
    <div>
      <Navbar />
      <Container fluid className='home'>
        <h1 className='text-white'>Let's do it together.</h1>
        <p className='text-white'>We travel the world in search of stories. Come along for the the ride.</p>
        <button className='btn text-white'>View Latest Posts</button>
      </Container>

      {/* SECOND NAVBAR */}
      <Nav className='p-2 shadow sec-nav'>
        <ul className='g-5'>
          <li className='p-3'>Nature</li>
          <li className='p-3 ms-5'>Photography</li>
          <li className='p-3 ms-5'>Relaxation</li>
          <li className='p-3 ms-5'>Vacation</li>
          <li className='p-3 ms-5'>Travel</li>
          <li className='p-3 ms-5'>Adventure</li>
        </ul>
      </Nav>

      {/* FEATURED POSTS */}
      <Container className='mx-auto mt-5'>
        <h4 className='text-center'>Featured Posts</h4>
        <hr className='w-25 mx-auto' />

        <Row className='row' id='card'>
          <div class="card w-50 shadow" id='card-1'>
            <div class="card-body mt-5">
              <h5 class="card-title mt-5 text-white card1-title">The Road Ahead</h5>
              <p class="card-text text-white">The road ahead might be paved -it might not be.</p>
            </div>
          </div>

          <div class="card w-50 shadow" id='card-2'>
            <div class="card-body mt-5">
              <h5 class="card-title mt-5 text-white card1-title">From Top Down</h5>
              <p class="card-text text-white">Once a year, go someplace you've never been before.</p>
            </div>
          </div>
        </Row>

        {/* MOST RECENT */}
        <h4 className='text-center mt-5' style={{ paddingTop: "50px" }}>Most Recent</h4>
        <hr className='w-25 mx-auto' />

        <div class="card-group">
          <div class="card cards m-2 shadow">
            <img class="card-img-top" style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", height: "200px", backgroundPosition: "right"  }} />
            <div class="card-body">
              <h5 class="card-title">Still standing Tall</h5>
              <p class="card-text">Life begins at the end of your comfort zone.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">William Wong</small>
              <small class="text-body-secondary ms-5" style={{ paddingLeft: "120px" }}>9/25/2015</small>
            </div>
          </div>
          <div class="card cards m-2 border shadow">
            <img class="card-img-top" style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", height: "200px", backgroundPosition: "right" }} />
            <div class="card-body">
              <h5 class="card-title">Sunny Side Up</h5>
              <p class="card-text">No Place is ever as bad as they tell you it's going to be.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Mat Vogels</small>
              <small class="text-body-secondary ms-5" style={{ paddingLeft: "120px" }}>9/25/2015</small>
            </div>
          </div>
          <div class="card cards m-2 border shadow">
            <img class="card-img-top" style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover", height: "200px" }} />
            <div class="card-body">
              <h5 class="card-title">Water Falls</h5>
              <p class="card-text">We travel not to escape life, but for life not to escape us.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">William Wong</small>
              <small class="text-body-secondary ms-5" style={{ paddingLeft: "120px" }}>9/25/2015</small>
            </div>
          </div>
        </div>

        <div class="card-group">
          <div class="card cards m-2 shadow">
            <img class="card-img-top" style={{ backgroundImage: `url(${img4})`, backgroundSize: "cover", height: "200px", backgroundPosition: "right"  }} />
            <div class="card-body">
              <h5 class="card-title">Through the Mist</h5>
              <p class="card-text">Travel makes you see what a tiny place you occupy in the world.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Mat Vogels</small>
              <small class="text-body-secondary ms-5" style={{ paddingLeft: "120px" }}>9/25/2015</small>
            </div>
          </div>
          <div class="card cards m-2 border shadow">
            <img class="card-img-top" style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover", height: "200px" }} />
            <div class="card-body">
              <h5 class="card-title">Awaken Early</h5>
              <p class="card-text">Not all those who wonder are lost.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">William Wong</small>
              <small class="text-body-secondary ms-5" style={{ paddingLeft: "120px" }}>9/25/2015</small>
            </div>
          </div>
          <div class="card cards m-2 border shadow">
            <img class="card-img-top" style={{ backgroundImage: `url(${img6})`, backgroundSize: "cover", height: "200px", backgroundPosition: "right"  }} />
            <div class="card-body">
              <h5 class="card-title">Try It Always</h5>
              <p class="card-text">We travel not to escape life, but for life not to escape us.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Mat Vogels</small>
              <small class="text-body-secondary ms-5" style={{ paddingLeft: "120px" }}>9/25/2015</small>
            </div>
          </div>
        </div>
      </Container>
      <br /><br /><br /><br />

      <Foooter />
    </div>
  )
}
