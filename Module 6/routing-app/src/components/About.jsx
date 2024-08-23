import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'

export default function About() {
  return (
    <div>
        <Navbar />
      <Container className='mt-5 w-75 shadow p-5'>
        <Row>
            <div className='col-md-5'>
                <img src="https://www.bing.com/th/id/OGC.70918a2671b7aacf580d5fe364742fd4?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2ftD_vqfAVtPYAAAAd%2fthis-is-about-all-of-us-all-about-us.gif&ehk=f643Hq2XN82pSJQDYqJTx7sINp1%2fv6OEaCo%2bW3vsVgM%3d" alt="" className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                <h1 className='mt-5 ms-5'>This is About us page</h1>
                <h2 className='mt-5 ms-5'>Information About Webpage </h2>
            </div>
        </Row>
      </Container>
    </div>
  )
}
