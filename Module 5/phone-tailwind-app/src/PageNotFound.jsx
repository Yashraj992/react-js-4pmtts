import React from 'react'
import Header from './Header'
import img from './assets/image/404.gif'
import { Container } from 'react-bootstrap'
import Footer from './Footer'

export default function PageNotFound() {
  return (
    <>
      <Header />
      <Container className='p-32'>
        <img src={img} alt="" className='w-full h-96'/>
      </Container>
      <Footer />
    </>
  )
}
