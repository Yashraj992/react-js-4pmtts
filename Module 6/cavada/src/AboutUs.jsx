import React from 'react'
import Navbar from './Navbar'
import img1 from './assets/img/about-home.webp'
import box1 from './assets/img/about1.webp'
import box2 from './assets/img/about2.png'
import team1 from './assets/img/team1.png'
import team2 from './assets/img/team2.png'
import team3 from './assets/img/team3.png'
import emp from './assets/img/emp.png'
import feedback from './assets/img/feedback.png'

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="about-us container mt-24">
        <h1 className='text-center text-5xl p-2 font-bold'>About US</h1>
        <p className='text-xl text-center px-40'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        <img src={img1} alt="" className='img-fluid w-full rounded-3xl mt-20' />

        {/* About-menu */}
        <div className="home-menu container flex mt-36 text-center">
          <div className="home-box col-md-3">
            <h1 className='h-24 text-6xl font-bold'>10</h1>
            <p className='text-xl -mt-7'>Shops</p>
          </div>

          <div className="home-box col-md-3">
            <h1 className='h-24 text-6xl font-bold'>06</h1>
            <p className='text-xl -mt-7'>Years Of Experience</p>
          </div>

          <div className="home-box col-md-3">
            <h1 className='h-24 text-6xl font-bold'>120+</h1>
            <p className='text-xl -mt-7'>Coffee</p>
          </div>

          <div className="home-box col-md-3">
            <h1 className='h-24 text-6xl font-bold'>1302</h1>
            <p className='text-xl -mt-7'>Reviews</p>
          </div>
        </div>

        {/* About-box */}
        <div className="about-box mt-20">
          <div className="box1 flex" style={{ height: "80vh" }}>
            <div className="box-img col-md-6">
              <img src={box1} alt="" className='img-fluid' />
            </div>
            <div className="box-data col-md-6 mt-28 text-left ms-40">
              <h1 className='font-bold text-5xl p-2'>Our Values</h1>
              <p className='text-xl w-2/3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div className="box1 flex" style={{ height: "80vh" }}>
            <div className="box-data col-md-6 mt-28">
              <h1 className='font-bold text-5xl p-2 ms-32'>Open everyday</h1>
              <p className='text-xl w-2/3 ms-32'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="box-img col-md-6">
              <img src={box2} alt="" className='img-fluid' />
            </div>
          </div>
        </div>

        {/* Meet our team */}
        <div className="team text-center mt-20" style={{ height: "99vh" }}>
          <h1 className='p-1'>Meet our team</h1>
          <p className='text-xl'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

          <div className="team-box flex justify-between mt-12">
            <div className="box1 col-md-3">
              <img src={team1} alt="" className='img-fluid rounded-full mx-auto' />
              <p className='text-xl font-semibold'>Kiel Ward</p>
              <p className='text-gray-500'>Maiores quia et. Explicabo cumque possimus nihil odio. Qui et nihil rerum reiciendis perspiciatis atque itaque odio. Et eligendi nemo velit iste. Accusamus non voluptate in omnis ullam.</p>
            </div>

            <div className="box1 col-md-3">
              <img src={team2} alt="" className='img-fluid rounded-full mx-auto' />
              <p className='text-xl font-semibold'>Ella Jacobi</p>
              <p className='text-gray-500'>Temporibus aut earum enim et laudantium aut dolorum quia. Fugiat qui laudantium nesciunt adipisci iste dolores. Numquam repellendus qui. Tempora q</p>
            </div>

            <div className="box1 col-md-3">
              <img src={team3} alt="" className='img-fluid rounded-full mx-auto' />
              <p className='text-xl font-semibold'>Aabel jacobson</p>
              <p className='text-gray-500'>Amet id sit distinctio ut omnis quidem voluptatem perferendis. Cupiditate excepturi non placeat eaque et nobis voluptatum dolor. Vitae est</p>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="feedback container text-center mt-12" style={{ height: "99vh" }}>
          <h1 className='text-5xl font-bold p-2'>People say about us</h1>
          <p className='text-2xl font-extralight'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

          <div className="feedback-data flex">
            <div className="col-md-6 mt-36">
              <p className='text-xl text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <div className="feed-data flex">
                <img src={emp} alt="" className='img-fluid p-4' />
                <div className="emp-name mt-4">
                  <p className='text-xl'>Julia mark</p>
                  <p className='text-xl font-light'>Manager</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <img src={feedback} alt="" className='img-fluid p-2' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}