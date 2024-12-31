import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import reservation from './assets/img/reservation.webp'

export default function Reservation() {
    return (
        <>
            <Navbar />
            {/* Reservation */}
            <div className="reservation container flex mt-12" style={{ height: "99vh" }}>
                <div className="reservation-img col-md-8 mt-3" data-aos="fade-right" data-aos-duration="2000">
                    <img src={reservation} alt="" className='img-fluid p-2' />
                </div>

                <div className="reservation-form col-md-4 mt-36" data-aos="fade-left" data-aos-duration="2000">
                    <h1 className='p-1'>Make a Reservation</h1>
                    <form action="" className='form'>
                        <input type="text" placeholder='Name' className='form-control' required />

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

                        <input type="email" placeholder='Email Address' className='form-control mt-2' required />

                        <input type="tel" placeholder='Phone Number' className='form-control mt-2' required />

                        <input type="submit" value="Reserve" className='btn form-control mt-2 py-2 text-white' style={{ backgroundColor: "#FF7377" }} />
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}
