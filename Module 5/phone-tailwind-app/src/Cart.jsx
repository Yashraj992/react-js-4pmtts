import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Cart() {
  return (
    <>
      <Header />

      <div className='flex p-24 cart'>
        <div className="box1 w-2/3 h-32 shadow rounded-3xl bg-white cart-h1">
          <p className='text-blue-900 text-xl p-4 font-medium'>No Items are add in cart</p>
        </div>

        <div className="box2 shadow bg-white w-1/3 p-6 ms-12 rounded-3xl cart-data">
          <p className='text-blue-900 text-xl font-semibold'>Cart summary</p>
          <hr className='mt-3'/>
          <p className='mt-3'>Total Price:</p>
          <p className='text-blue-900 font-semibold text-3xl mt-2 p-1'>$0.00</p>
        </div>
      </div>

      <Footer />
    </>
  )
}
