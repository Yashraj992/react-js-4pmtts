import React from 'react'
import Navbar from './Navbar'
import home from './assets/img/blog-home.jpg'
import blog1 from './assets/img/blog1.jpg'
import blog2 from './assets/img/blog2.jpg'
import blog3 from './assets/img/blog3.jpg'
import blog4 from './assets/img/blog4.jpg'
import blog5 from './assets/img/blog5.jpg'
import blog6 from './assets/img/blog6.jpg'
import blog7 from './assets/img/blog7.jpg'
import blog8 from './assets/img/blog8.jpg'
import blog9 from './assets/img/blog9.jpg'
import blog10 from './assets/img/blog10.jpg'
import blog11 from './assets/img/blog11.jpg'
import blog12 from './assets/img/blog12.jpg'
import Footer from './Footer'

export default function Blog() {
  return (
    <>
      <Navbar />

      <div className="blog mt-24 container">

        <div className="blog-data flex">
          <div className="col-md-6 self-center" data-aos="fade-right" data-aos-duration="2000">
            <p className='px-4'>Dec 10,2022</p>
            <h1 className='text-5xl font-bold w-72 p-4 -mt-10'>Best Coffee Brewing Channels</h1>
            <p className='text-xl px-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="col-md-6" data-aos="fade-left" data-aos-duration="2000">
            <img src={home} alt="" className='rounded-3xl'/>
          </div>
        </div>

        {/* blog-box1 */}
        <div className="blog-box flex justify-around mt-24" data-aos="zoom-in" data-aos-duration="2000">
          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog1} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>Coffee maker vs making coffee manually</p>
            <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog2} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>How to Make Arabic Coffee</p>
            <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog3} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>Coffee and Health</p>
            <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>
        </div>

        {/* blog-box2 */}
        <div className="blog-box flex justify-around" data-aos="zoom-in" data-aos-duration="2000">
          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog4} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>5 things to remember when making a latte</p>
            <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog5} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>Instant coffee vs homemade coffee</p>
            <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog6} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>Where does decaffeinated coffee originate?</p>
            <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>
        </div>

        {/* blog-box3 */}
        <div className="blog-box flex justify-around" data-aos="zoom-in" data-aos-duration="2000">
          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog7} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>How to create a holiday coffee drink</p>
            <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog8} alt="" className='rounded-2xl h-64 w-96'/>
            <p className='text-2xl font-bold mt-4'>Different ingredients that you can put for a more desirable coffee</p>
            <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog9} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>The different colors of coffee and what they mean</p>
            <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>
        </div>

        {/* blog-box4 */}
        <div className="blog-box flex justify-around" data-aos="zoom-in" data-aos-duration="2000">
          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog10} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>How to make a herbal coffee</p>
            <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog11} alt="" className='rounded-2xl h-64 w-96'/>
            <p className='text-2xl font-bold mt-4'>The benefits of drinking mushroom coffee</p>
            <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>

          <div className="box col-md-4 p-4">
            <p>Dec 10, 2022</p>
            <img src={blog12} alt="" className='rounded-2xl'/>
            <p className='text-2xl font-bold mt-4'>How to Make Cold Brew Coffee</p>
            <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat minim mollit non duis enim velit.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
