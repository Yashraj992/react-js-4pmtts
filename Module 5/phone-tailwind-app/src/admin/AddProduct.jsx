import React from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'
import { Row, Container } from 'react-bootstrap'
import img1 from '../assets/image/star.png'
import shop1 from '../assets/image/best7.jpg'
import shop2 from '../assets/image/best8.png'

export default function AddProduct() {
    return (
        <>
            <Header />

            <Container fluid>
                <Row>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <h1 className='p-5 text-4xl'>Add Product</h1>

                        <div className="box1 flex justify-center space-x-8 mt-11 box-data">
                            <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                                <img src={shop1} alt="" className='h-64 w-full' />
                                <h2 className='font-semibold mt-2 p-1'>Fllufy Sheep sofa</h2>
                                <span className='flex mt-2'>
                                    <img src={img1} alt="" />
                                    <img src={img1} alt="" />
                                    <img src={img1} alt="" />
                                    <img src={img1} alt="" />
                                </span>
                                <p className='mt-2 text-xl font-semibold'>$163</p>
                            </div>

                            <div className="card1 p-3 m-2 bg-white rounded-xl shadow hover:scale-95 transition-all card-data">
                                <img src={shop2} alt="" className='h-64 w-full' />
                                <h2 className='font-semibold mt-2 p-1'>Modern Arm Sofa</h2>
                                <span className='flex mt-2'>
                                    <img src={img1} alt="" />
                                    <img src={img1} alt="" />
                                    <img src={img1} alt="" />
                                    <img src={img1} alt="" />
                                </span>
                                <p className='mt-2 text-xl font-semibold'>$173</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}
