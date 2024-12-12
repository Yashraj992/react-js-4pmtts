import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from './assets/img/404.gif'

export default function PageNotFound() {
  return (
    <div>
      <Navbar />
      <div className="error mt-12 mx-auto">
        <img src={img1} alt="" className='w-full h-96'/>
      </div>
      <Footer/>
    </div>
  )
}
