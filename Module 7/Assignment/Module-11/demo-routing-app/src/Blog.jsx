import React from 'react'
import Navbar from './Navbar'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import blog1 from './assets/image/blog-1.jpg'
import blog2 from './assets/image/blog-2.jpg'
import blog3 from './assets/image/blog-3.jpg'
import blog4 from './assets/image/blog-4.jpg'
import blog5 from './assets/image/blog-5.jpg'
import blog6 from './assets/image/blog-6.jpg'
import blog7 from './assets/image/blog-7.jpg'
import blog8 from './assets/image/blog-8.jpg'
import blog9 from './assets/image/blog-9.jpg'
import Footer from './Foooter'
export default function Blog() {
    return (
        <div>
            <Navbar />

            <Container className='mt-5 blog'>
                <p style={{ fontSize: "50px", letterSpacing: "5px" }}>Shop-Grid</p>
                <p><Link to={"/"}>Home</Link>  / Shop-Grid</p>

                <Row>
                    <div className="col-md-4">
                        <img src={blog1} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Jewellery / 12 jan, 2024</p>
                        <b>Accessorizing for Every Occasion: Jewelry Styling Tips</b>
                        <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...</p>
                    </div>
                    <div className="col-md-4">
                    <img src={blog2} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Bed Rooms / 18 jan, 2024</p>
                        <b>10 Timeless Jewelry Pieces Every Woman Should Own</b>
                        <p>vel pretium suspendisse ultrices tempus vestibulum, nisl platea adipiscing ac ullamcorper...</p>
                    </div>
                    <div className="col-md-4">
                    <img src={blog3} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Kitchen / 10 Feb, 2024</p>
                        <b>How to Choose the Perfect Engagement Ring</b>
                        <p>Consequat suspendisse ultrices tempus vestibulum, nisl platea adipiscing ac ullamcorper...</p>
                    </div>
                </Row>

                <Row className='mt-5'>
                    <div className="col-md-4">
                        <img src={blog4} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Living Room / 05 March, 2024</p>
                        <b>Accessorizing for Every Occasion: Jewelry Styling Tips</b>
                        <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...</p>
                    </div>
                    <div className="col-md-4">
                    <img src={blog5} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Dining Table / 28 March, 2024</p>
                        <b>Best Jewellerys for 2024</b>
                        <p>vel pretium suspendisse ultrices tempus vestibulum, nisl platea adipiscing ac ullamcorper...</p>
                    </div>
                    <div className="col-md-4">
                    <img src={blog6} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Guest Room / 04 April, 2024</p>
                        <b>10 Timeless Jewelry Pieces Every Woman Should Own</b>
                        <p>Consequat suspendisse ultrices tempus vestibulum, nisl platea adipiscing ac ullamcorper...</p>
                    </div>
                </Row>

                <Row className='mt-5'>
                    <div className="col-md-4">
                        <img src={blog7} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Jewellery / 07 April, 2024</p>
                        <b>Accessorizing for Every Occasion: Jewelry Styling Tips</b>
                        <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...</p>
                    </div>
                    <div className="col-md-4">
                    <img src={blog8} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Bed Rooms / 10 April, 2024</p>
                        <b>How to Choose the Perfect Engagement Ring</b>
                        <p>vel pretium suspendisse ultrices tempus vestibulum, nisl platea adipiscing ac ullamcorper...</p>
                    </div>
                    <div className="col-md-4">
                    <img src={blog9} alt="" className='img-fluid blog-i'/>
                        <p className='mt-3'>Bed Rooms / 10 April, 2024</p>
                        <b>How to Choose the Perfect Engagement Ring</b>
                        <p>Consequat suspendisse ultrices tempus vestibulum, nisl platea adipiscing ac ullamcorper...</p>
                    </div>
                </Row>
            </Container>

            <Footer />
        </div>

    )
}
