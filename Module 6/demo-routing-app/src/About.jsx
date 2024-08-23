import React from 'react'
import Navbar from './Navbar'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import about from './assets/image/about-home.jpg'
import team1 from './assets/image/team-1.jpg'
import team2 from './assets/image/team-2.jpg'
import team3 from './assets/image/team-3.jpg'
import team4 from './assets/image/team-4.jpg'
import Footer from './Foooter'

export default function About() {
    return (
        <div>
            <Navbar />

            <Container className='about mt-5'>
                <p style={{ fontSize: "50px", letterSpacing: "5px" }}>About Us</p>
                <p><Link to={"/"}>Home</Link>  / About Us</p>

                <div className="about-data">
                    <img src={about} alt="" className='img-fluid mt-5' />
                    <p className='text-center fs-4 p-5'>Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla tellus sed purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.Facilisi ut vulputate volutpat a aliquet.</p>
                </div>

                <Row className='text-center mt-5'>
                    <div className="col-md-3">
                        <i class="bi bi-person fs-1"></i>
                        <p className='fs-4'>Curated by our experts</p>
                        <p>Suspendisse tempus rhoncus enim pellentesque est vehicula vitae eget.</p>
                    </div>
                    <div className="col-md-3">
                        <i class="bi bi-pencil fs-1"></i>
                        <p className='fs-4'>Creative</p>
                        <p>Suspendisse tempus rhoncus enim pellentesque est vehicula vitae eget.</p>
                    </div>
                    <div className="col-md-3">
                        <i class="bi bi-crosshair fs-1"></i>
                        <p className='fs-4'>Dedicated</p>
                        <p>Suspendisse tempus rhoncus enim pellentesque est vehicula vitae eget.</p>
                    </div>
                    <div className="col-md-3">
                        <i class="bi bi-cart fs-1"></i>
                        <p className='fs-4'>One cart shopping</p>
                        <p>Suspendisse tempus rhoncus enim pellentesque est vehicula vitae eget.</p>
                    </div>
                </Row>

                <h2 className='mt-5'>Our Team</h2>
                <Row className='mt-5 text-center'>
                    <div className="col-md-3 about-c">
                        <img src={team1} alt="" className='img-fluid' />
                        <p className='fs-5 mt-4'>Ms Sienna Jolie</p>
                        <p>CEO-Founder</p>
                    </div>
                    <div className="col-md-3 about-c">
                        <img src={team2} alt="" className='img-fluid' />
                        <p className='fs-5 mt-4'>Mr Patrik Smith</p>
                        <p>General Manager</p>
                    </div>
                    <div className="col-md-3 about-c">
                        <img src={team3} alt="" className='img-fluid' />
                        <p className='fs-5 mt-4'>Mrs Lora Inn</p>
                        <p>Assistant Manager</p>
                    </div>
                    <div className="col-md-3 about-c">
                        <img src={team4} alt="" className='img-fluid' />
                        <p className='fs-5 mt-4'>Ms. Nocole Sara</p>
                        <p>Manager</p>
                    </div>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}
