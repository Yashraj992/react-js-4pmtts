import React from 'react'
import { Container, Row } from 'react-bootstrap'
import main from './assets/image/main-home.jpg'
import bg1 from './assets/image/home-bg1.jpg'
import bg2 from './assets/image/home-bg2.jpg'
import bg3 from './assets/image/home-bg3.jpg'

export default function Content() {
  return (
    <div>
      <Container className='content'>
        <Row className='p-2'>
          <div className="col-md-6">
            <h1 className='mt-5' style={{ paddingTop: "100px", fontSize: "50px", letterSpacing: "5px" }}>Simple Necklace Set</h1>
            <p className='mt-3 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae quisquam, doloremque nisi nulla pariatur voluptatem, ullam a omnis fugiat unde ratione aut ipsam obcaecati laborum laboriosam, suscipit aliquid! Minima itaque ullam deserunt odit repudiandae quae, illum amet aspernatur voluptatem!</p>
            <button className='btn btn-dark'>Shop Now <i className="bi bi-arrow-right ms-2"></i></button>
          </div>
          <div className="col-md-6">
            <img src={main} alt="" style={{ height: "650px", width: "630px" }} />
          </div>
        </Row>
      </Container>

      <Container>
      <Row>
          <div className="col-md-4">
            <div class="card text-bg-dark border-0">
              <img src={bg1} class="card-img" alt="..." />
              <div class="card-img-overlay">
                <p class="card-title text-black fs-2 fw-light" style={{marginTop:"300px"}}>Modern Collection</p>
                <button className='btn btn-transparent border border-black text-black btn-lg rounded-pill'>Shop Now  <i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card text-bg-dark border-0">
              <img src={bg2} class="card-img" alt="..." />
              <div class="card-img-overlay">
                <p class="card-title text-black fs-2 fw-light" style={{marginTop:"300px"}}>Classic Collection</p>
                <button className='btn btn-transparent border border-black text-black btn-lg rounded-pill'>Shop Now <i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card text-bg-dark border-0">
              <img src={bg3} class="card-img" alt="..." />
              <div class="card-img-overlay">
                <p class="card-title text-black fs-2 fw-light" style={{marginTop:"300px"}}>Timeless Collection</p>
                <button className='btn btn-transparent border border-black text-black btn-lg rounded-pill'>Shop Now  <i class="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
