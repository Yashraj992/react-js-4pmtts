import React from 'react'
import img1 from './assets/image/star.png'
import best1 from './assets/image/best1.png'
import best2 from './assets/image/best2.png'
import best3 from './assets/image/best3.png'
import best4 from './assets/image/best4.png'
import best5 from './assets/image/best5.jpg'
import best6 from './assets/image/best6.jpg'
import best7 from './assets/image/best7.jpg'
import best8 from './assets/image/best8.png'

export default function BestSales() {
    return (
        <>
            <div className="best">
                <h1 className='text-4xl font-semibold text-center p-10'>Best Sales</h1>

                <div className="box1 flex justify-center space-x-8 mt-11 box-data">
                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best1} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Stone and Beam Westview</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$799</p>
                    </div>

                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best2} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Rivet Bigelow Modern</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$799</p>
                    </div>

                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best3} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Amazon Brand Modern Sofa</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$599</p>
                    </div>
                </div>


                <div className="box1 flex justify-center space-x-8 mt-11 box-data">
                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best4} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Rivet Bigelow Modern02</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$799</p>
                    </div>

                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best5} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Iphone 12 Pro Max</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$799</p>
                    </div>

                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best6} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Realme 8</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$599</p>
                    </div>
                </div>

                <div className="box1 flex justify-center space-x-8 mt-11 box-data">
                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best7} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Iphone 12 Pro</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$799</p>
                    </div>

                    <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                        <img src={best8} alt="" className='h-64 w-full p-4 img-data' />
                        <h2 className='font-semibold mt-2 p-1'>Iphone 12 Pro Max</h2>
                        <span className='flex mt-2'>
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                            <img src={img1} alt="" />
                        </span>
                        <p className='mt-2 text-xl font-semibold'>$799</p>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}
