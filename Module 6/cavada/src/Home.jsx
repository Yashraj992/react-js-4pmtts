import React from 'react'
import Navbar from './Navbar'
import img1 from "./assets/img/home.png"
import img2 from './assets/img/section1.webp'
import img3 from './assets/img/section2.webp'
import new1 from './assets/img/new1.png'
import new2 from './assets/img/new2.png'
import new3 from './assets/img/new3.png'
import pastry1 from './assets/img/pastry1.png'
import pastry2 from './assets/img/pastry2.png'
import pastry3 from './assets/img/pastry3.png'
import feedback from './assets/img/feedback.png'
import emp from './assets/img/emp.png'
import reservation from './assets/img/reservation.webp'
import Footer from './Footer'

export default function Home() {
    return (
        <>
            <Navbar />

            {/* Home */}
            <div className="home container flex">
                <div className="col-md-6 mt-32">
                    <h1 className='text-8xl w-96 p-3'>Fresh & Tasty</h1>
                    <p className='p-2 text-2xl'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='btn text-white px-4 py-2 m-2' style={{ backgroundColor: "#FF7377" }}>Make a Reservation</button>
                </div>

                <div className="col-md-6">
                    <img src={img1} alt="" className='img-fluid' />
                </div>
            </div>

            {/* Home-menu */}
            <div className="home-menu container flex mt-24 text-center">
                <div className="home-box col-md-3">
                    <h1 className='h-24 text-7xl'>10</h1>
                    <p className='text-2xl '>Shops</p>
                </div>

                <div className="home-box col-md-3">
                    <h1 className='h-24 text-7xl'>06</h1>
                    <p className='text-2xl '>Years Of Experience</p>
                </div>

                <div className="home-box col-md-3">
                    <h1 className='h-24 text-7xl'>120+</h1>
                    <p className='text-2xl '>Coffee</p>
                </div>

                <div className="home-box col-md-3">
                    <h1 className='h-24 text-7xl'>1302</h1>
                    <p className='text-2xl '>Reviews</p>
                </div>
            </div>

            {/* Home-section1 */}
            <div className="home-section1 container mt-36">
                <div className="home-box1 flex">
                    <div className="col-md-6">
                        <img src={img2} alt="" className='img-fluid' />
                    </div>

                    <div className="col-md-6">
                        <h1 className='text-7xl font-bold p-4'>The best day starts here</h1>
                        <p className='text-2xl p-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>

                <div className="home-box1 flex mt-24">
                    <div className="col-md-6 mt-24">
                        <h1 className='text-4xl font-bold p-4'>Open everyday</h1>
                        <p className='text-2xl p-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="col-md-6">
                        <img src={img3} alt="" className='img-fluid p-8' />
                    </div>
                </div>
            </div>

            {/* New Flowers */}
            <div className="new-flower mt-24 container text-center" style={{ height: "99vh" }}>
                <h1 className='text-5xl p-4'>New Flowers</h1>
                <p className='text-xl px-24'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <div className="flower-img flex px-32">
                    <div className="img-box col-md-4">
                        <img src={new1} alt="" className='img-fluid p-5' />
                        <p className='text-2xl font-semibold'>Glace</p>
                        <span className='text-xl'>6$ <del>8$</del></span>
                    </div>

                    <div className="img-box col-md-4">
                        <img src={new2} alt="" className='img-fluid p-5' />
                        <p className='text-2xl font-semibold'>Espresso Laccino</p>
                        <span className='text-xl'>6$ <del>9$</del></span>
                    </div>

                    <div className="img-box col-md-4">
                        <img src={new3} alt="" className='img-fluid p-5' />
                        <p className='text-2xl font-semibold'>Irish Coffee</p>
                        <span className='text-xl'>6$ <del>4$</del></span>
                    </div>
                </div>

                <button className='mt-10 btn text-white px-4 py-2' style={{ backgroundColor: "#FF7377" }}>Go To Menu</button>
            </div>

            {/* Pastry */}
            <div className="pastry mt-24 container text-center" style={{ height: "99vh" }}>
                <h1 className='text-5xl p-4'>Pastry</h1>
                <p className='text-xl px-24'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <div className="flower-img flex px-32">
                    <div className="img-box col-md-4">
                        <img src={pastry1} alt="" className='img-fluid p-5' />
                        <p className='text-2xl font-semibold'>Donut</p>
                        <span className='text-xl'>15$ <del>18$</del></span>
                    </div>

                    <div className="img-box col-md-4">
                        <img src={pastry2} alt="" className='img-fluid p-5' />
                        <p className='text-2xl font-semibold'>Caramel bun</p>
                        <span className='text-xl'>7$ <del>9$</del></span>
                    </div>

                    <div className="img-box col-md-4">
                        <img src={pastry3} alt="" className='img-fluid p-5' />
                        <p className='text-2xl font-semibold'>Chocolate Cookies</p>
                        <span className='text-xl'>16$ <del>14$</del></span>
                    </div>
                </div>

                <button className='mt-10 btn text-white px-4 py-2' style={{ backgroundColor: "#FF7377" }}>Go To Menu</button>
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

            {/* Reservation */}
            <div className="reservation container flex mt-12" style={{height:"99vh"}}>
                <div className="reservation-img col-md-8 mt-3">
                    <img src={reservation} alt="" className='img-fluid p-2'/>
                </div>

                <div className="reservation-form col-md-4 mt-36">
                    <h1 className='p-1'>Make a Reservation</h1>
                    <form action="" className='form'>
                        <input type="text" placeholder='Name' className='form-control' required/>

                        <select value="" className='form-control mt-2' required>
                            <option name="" id="">Choose a Day</option>
                            <option name="" id="">Monday</option>
                            <option name="" id="">Tuesday</option>
                            <option name="" id="">Wednsday</option>
                            <option name="" id="">Thusday</option>
                            <option name="" id="">Friday</option>
                            <option name="" id="">Saturday</option>
                            <option name="" id="">Sunday</option>
                        </select>

                        <select value="" className='form-control mt-2' required>
                            <option name="" id="">Choose a Time</option>
                            <option name="" id="">From 10am to 11am</option>
                            <option name="" id="">From 11am to 12pm</option>
                            <option name="" id="">From 12pm to 1pm</option>
                            <option name="" id="">From 1pm to 2pm</option>
                            <option name="" id="">From 2pm to 3pm</option>
                            <option name="" id="">From 3pm to 4pm</option>
                            <option name="" id="">From 4pm to 5pm</option>
                        </select>

                        <input type="email" placeholder='Email Address' className='form-control mt-2' required/>

                        <input type="tel" placeholder='Phone Number' className='form-control mt-2' required/>

                        <input type="submit" value="Reserve" className='btn form-control mt-2 py-2 text-white' style={{backgroundColor:"#FF7377"}}/>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}
