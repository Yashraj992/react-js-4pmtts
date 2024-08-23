import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import shop1 from './assets/image/shop-1.jpg'
import shop2 from './assets/image/shop-2.jpg'
import shop3 from './assets/image/shop-3.jpg'
import shop4 from './assets/image/shop-4.jpg'
import shop5 from './assets/image/shop-5.jpg'
import shop6 from './assets/image/shop-6.jpg'
import shop7 from './assets/image/shop-7.jpg'
import shop8 from './assets/image/shop-8.jpg'
import shop9 from './assets/image/shop-9.jpg'
import shop10 from './assets/image/shop-10.jpg'
import shop11 from './assets/image/shop-11.jpg'
import shop12 from './assets/image/shop-12.jpg'
import Footer from './Foooter'

export default function Shop() {
    return (
        <div>
            <Navbar />

            <Container className='shop mt-5'>
                <p style={{ fontSize: "50px", letterSpacing: "5px" }}>Shop-Grid</p>
                <p><Link to={"/"}>Home</Link>  / Shop-Grid</p>

                <Row className='mt-5' style={{paddingTop:"70px"}}>
                    <div className="col-md-8">
                        <p>Showing 1-12 of 55 results</p>
                    </div>
                    <div className="col-md-4">
                        <select name="" id="" className='form-control'>
                            <option value="">Default Sorting</option>
                            <option value="">Color</option>
                            <option value="">Size</option>
                            <option value="">Price</option>
                        </select>
                    </div>
                </Row>

                <Row className='mt-5'>
                    <div className="col-md-3 shop-c">
                        <img src={shop1} alt="" className='img-fluid'/>
                        <p className='mt-2'>Dark Ring</p>
                        <p>$95.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop2} alt="" className='img-fluid'/>
                        <p className='mt-2'>Gold Chain</p>
                        <p>$55.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop3} alt="" className='img-fluid'/>
                        <p className='mt-2'>Wedding Ring</p>
                        <p>$65.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop4} alt="" className='img-fluid'/>
                        <p className='mt-2'>Gold Ring</p>
                        <p>$50.00</p>
                    </div>
                </Row>

                <Row className='mt-5'>
                    <div className="col-md-3 shop-c">
                        <img src={shop5} alt="" className='img-fluid'/>
                        <p className='mt-2'>Silver Earing</p>
                        <p>$70.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop6} alt="" className='img-fluid'/>
                        <p className='mt-2'>Silver Ring</p>
                        <p>$95.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop7} alt="" className='img-fluid'/>
                        <p className='mt-2'>Wedding Ring</p>
                        <p>$55.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop8} alt="" className='img-fluid'/>
                        <p className='mt-2'>Layer Chain</p>
                        <p>$65.00</p>
                    </div>
                </Row>

                <Row className='mt-5'>
                    <div className="col-md-3 shop-c">
                        <img src={shop9} alt="" className='img-fluid'/>
                        <p className='mt-2'>Floral Ring</p>
                        <p>$50.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop10} alt="" className='img-fluid'/>
                        <p className='mt-2'>Gold Ring</p>
                        <p>$70.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop11} alt="" className='img-fluid'/>
                        <p className='mt-2'>Silver Necklace</p>
                        <p>$70.00</p>
                    </div>
                    <div className="col-md-3 shop-c">
                        <img src={shop12} alt="" className='img-fluid'/>
                        <p className='mt-2'>Double Chain</p>
                        <p>$70.00</p>
                    </div>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}
