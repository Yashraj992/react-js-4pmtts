import React from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'
import { Row, Container } from 'react-bootstrap'
import img1 from '../assets/image/star.png'
import new1 from '../assets/image/new1.jpg'
import new2 from '../assets/image/new2.jpg'

export default function AddSubProduct() {
    return (
        <>
            <Header />

            <Container fluid>
                <Row>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <h1 className='p-5 text-3xl'>Add Sub Product</h1>

                        <div className="box1 flex justify-center space-x-8 mt-11 box-data">
                            <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                                <img src={new1} alt="" className='h-64 w-full p-4 img-data' />
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
                                <img src={new2} alt="" className='h-64 w-full p-4 img-data' />
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
                </Row>
            </Container>
        </>
    )
}

