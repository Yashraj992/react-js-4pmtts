import React from 'react'
import img1 from './assets/image/hero.png'
import img2 from './assets/image/car.png'
import img3 from './assets/image/bank.png'
import img4 from './assets/image/shield.png'
import img5 from './assets/image/earphone.png'

export default function Slider() {
  return (
    <>
      <div className="slider flex pt-20">
        <div className="slider-data p-8 mt-10 ms-36">
          <h1 className='text-5xl font-medium p-2'>50% Off For Your First Shopping</h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur similique ab, dignissimos quos fugiat asperiores excepturi! Fugit, error.</p>
          <button className='btn btn-dark mt-4'>Visit Collection</button>
        </div>
        <div className="slider-img w-2/3">
          <img src={img1} alt="" className='p-2 -mt-10 img-fluid' />
        </div>
      </div>

      <div className="card flex flex-row text-center justify-between border-0 p-14">
        <div className="box1 p-12" style={{ backgroundColor: "#FDEFE6" }}>
          <img src={img2} alt="" className='mx-auto'/>
          <h1 className='mt-2 p-1'>Free Shipping</h1>
          <p className='mt-2'>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="box1 p-12" style={{ backgroundColor: "#CEEBE9" }}>
          <img src={img3} alt="" className='mx-auto'/>
          <h1 className='mt-2 p-1'>Safe Payment</h1>
          <p className='mt-2'>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="box1 p-12" style={{ backgroundColor: "#E2F2B2" }}>
          <img src={img4} alt="" className='mx-auto'/>
          <h1 className='mt-2 p-1'>Secure Payment</h1>
          <p className='mt-2'>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="box1 p-12" style={{ backgroundColor: "#D6E5FB" }}>
          <img src={img5} alt="" className='mx-auto'/>
          <h1 className='mt-2 p-1'>Back Guarantee</h1>
          <p className='mt-2'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  )
}
