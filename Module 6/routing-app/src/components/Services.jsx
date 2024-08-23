import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'

export default function Services() {
  return (
    <div>
       <Navbar />
      <Container className='mt-5 w-75 shadow p-5'>
        <Row>
            <div className='col-md-5'>
                <img src="https://th.bing.com/th/id/OIP.S9JcHk8-xGP4-_AyNWvZTAHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                <h1 className='mt-5 ms-5'>This is our services page</h1>
                <h2 className='mt-5 ms-5'>Contact for our services </h2>
            </div>
        </Row>
      </Container>
    </div>
  )
}
