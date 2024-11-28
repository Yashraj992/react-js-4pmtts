import React from 'react'
import Navbar from './Navbar'
import img1 from './assets/image/hero1.png'
import img2 from './assets/image/hero2.webp'
import img3 from './assets/image/hero3.webp'
import NewFlower from './NewFlower'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* SECTION1 */}
      <div className='container section1 flex mt-16'>
        <div className="sec-data w-2/3">
          <h1 className='text-8xl p-3'> <span className='font-semibold'>Fresh</span> & <span className='font-semibold'>Tasty</span></h1>
          <p className='p-4 text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore officiis exercitationem debitis, consequuntur illum harum aut cum maiores quas hic voluptates at a ea aspernatur?</p>
          <button className='btn btn-pink m-4 px-3 py-2 font-medium text-white bg-rose-400 hover:bg-rose-500'>Make a Reservation</button>
        </div>
        <div className="sec1-img -mt-20">
          <img src={img1} alt="" className='img-fluid' />
        </div>
      </div>

      {/* SECTION2 */}
      <div className="section2 container">
        <div className="container flex justify-around mt-36 text-center">
          <div className="sec2-box">
            <h1 className='text-5xl font-bold p-2 text-rose-400'>10</h1>
            <p className='text-xl font-semibold p-1'>Shops</p>
          </div>

          <div className="sec2-box">
            <h1 className='text-5xl font-bold p-2 text-rose-400'>06</h1>
            <p className='text-xl font-semibold p-1'>Years Of Experience</p>
          </div>

          <div className="sec2-box">
            <h1 className='text-5xl font-bold p-2 text-rose-400'>120+</h1>
            <p className='text-xl font-semibold p-1'>Coffee</p>
          </div>

          <div className="sec2-box">
            <h1 className='text-5xl font-bold p-2 text-rose-400'>1302+</h1>
            <p className='text-xl font-semibold p-1'>Reviews</p>
          </div>
        </div>

        {/* Hero2 */}
        <div className="sec2-hero flex mt-20 p-11">
          <div className="sec2-img w-2/4">
            <img src={img2} alt="" className='img-fluid' />
          </div>

          <div className="sec2-data w-2/4 mt-16">
            <h1 className='text-5xl p-2 font-semibold'>The Best Day <br /> Starts Here</h1>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa eveniet earum modi voluptas exercitationem aliquid minus reiciendis maiores consequatur nemo architecto ex atque, corporis voluptates?</p>
          </div>
        </div>

        {/* Hero3 */}
        <div className="sec2-hero flex mt-16 p-7">
          <div className="sec2-data mt-16 w-2/3">
            <h1 className='text-5xl p-2 font-semibold'>Open Everyday</h1>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa eveniet earum modi voluptas exercitationem aliquid minus reiciendis maiores consequatur nemo architecto ex atque, corporis voluptates?</p>
          </div>

          <div className="sec2-img">
            <img src={img3} alt="" className='img-fluid' />
          </div>
        </div>
      </div>

      <NewFlower />
    </>
  )
}
