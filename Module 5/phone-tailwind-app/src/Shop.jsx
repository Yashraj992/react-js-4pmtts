import React from 'react'
import Header from './Header'
import img1 from './assets/image/star.png'
import shop1 from './assets/image/best1.png'
import shop2 from './assets/image/best2.png'
import shop3 from './assets/image/best3.png'
import shop4 from './assets/image/best5.jpg'
import shop5 from './assets/image/best6.jpg'
import shop6 from './assets/image/best7.jpg'
import shop7 from './assets/image/best8.png'
import Footer from './Footer'


export default function Shop() {
  return (
    <>
      <Header />
      <p className='shop-img text-white text-center'><p className='mt-40 p-1 text-4xl font-semibold'>Product</p></p>

      <form action="">
        <input type="text" placeholder='Search...' className='form-control w-2/4 mx-auto mt-12 bg-gray-200 rounded-3xl ps-4' />
      </form>

      <div className="box1 flex justify-center space-x-8 mt-11 box-data">
        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop1} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Stone and Beam WestView</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$193</p>
        </div>

        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop2} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Rivet Bigelow Modern</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$253</p>
        </div>

        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop3} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Amazon Brand Modern Sofa</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$89</p>
        </div>
      </div>

      <div className="box1 flex justify-center space-x-8 mt-11 box-data">
        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop2} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Rivet Bigelow Modern</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$253</p>
        </div>

        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop4} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Fllufy Sheep sofa</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$163</p>
        </div>

        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop5} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Faux velvet Sofa</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$163</p>
        </div>
      </div>

      <div className="box1 flex justify-center space-x-8 mt-11 box-data">
        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop6} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Fllufy Sheep sofa</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$163</p>
        </div>

        <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
          <img src={shop7} alt="" className='h-64 w-full' />
          <h2 className='font-semibold mt-2 p-1'>Modern Arm Sofa</h2>
          <span className='flex mt-2'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
          </span>
          <p className='mt-2 text-xl font-semibold'>$173</p>
        </div>
      </div>
      <br /> <br />

      <Footer />
    </>
  )
}
