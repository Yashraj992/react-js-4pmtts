import React from 'react'
import img1 from './assets/image/star.png'
import shop1 from './assets/image/shop-1.png'
import shop2 from './assets/image/shop-2.png'
import shop3 from './assets/image/shop-3.jpg'
import shop4 from './assets/image/shop-4.jpg'
import shop5 from './assets/image/shop-5.png'
import shop6 from './assets/image/shop-6.jpg'


export default function BigDiscount() {
  return (
    <>
      <div className="discount">
        <h1 className='text-4xl font-semibold text-center p-5'>Big Discount</h1>

        <div className="card1 flex justify-center space-x-8 mt-11 box-data">
            <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                <img src={shop1} alt="" className='h-64 w-full img-data'/>
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
                <img src={shop2} alt="" className='h-64 w-full img-data'/>
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
                <img src={shop3} alt="" className='h-64 w-full img-data'/>
                <h2 className='font-semibold mt-2 p-1'>Baltsar Chair</h2>
                <span className='flex mt-2'>
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                </span>
                <p className='mt-2 text-xl font-semibold'>$89</p>
            </div>
        </div>

        <div className="card1 flex justify-center space-x-8 mt-11 box-data">
            <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                <img src={shop4} alt="" className='h-64 w-full p-4 img-data'/>
                <h2 className='font-semibold mt-2 p-1'>Helmar Chair</h2>
                <span className='flex mt-2'>
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                </span>
                <p className='mt-2 text-xl font-semibold'>$112</p>
            </div>

            <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                <img src={shop5} alt="" className='h-64 w-full p-4 img-data'/>
                <h2 className='font-semibold mt-2 p-1'>Realme 8</h2>
                <span className='flex mt-2'>
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                </span>
                <p className='mt-2 text-xl font-semibold'>$599</p>
            </div>

            <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                <img src={shop6} alt="" className='h-64 w-full p-4 img-data'/>
                <h2 className='font-semibold mt-2 p-1'>One Plus Nord</h2>
                <span className='flex mt-2'>
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                </span>
                <p className='mt-2 text-xl font-semibold'>$799</p>
            </div>
        </div>
        <br /><br />
      </div>
    </>
  )
}
