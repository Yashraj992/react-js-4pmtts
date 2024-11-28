import React from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'
import { Row, Container } from 'react-bootstrap'
import img1 from '../assets/image/star.png'

export default function ManageFeedback() {
    return (
        <>
            <Header />

            <Container fluid>
                <Row>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <h1 className='p-5 text-3xl'>Manage Feedback</h1>

                        <div className="ms-5 p-4 mx-5 rounded" style={{ backgroundColor: "#1d3247" }}>
                            <h2 className='text-white p-1 text-xl'>Mr. Kumar</h2>
                            <p className='text-white'>Our all i am very setisfied with my purchase and will definatly consider your website for future needs.</p>
                            <p className='text-white'>Thank you for your commitment to quality and customer services!</p>
                            <span className='flex mt-2'>
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                            </span>
                        </div>

                        <div className="ms-5 p-4 mx-5 mt-4 rounded" style={{ backgroundColor: "#1d3247" }}>
                            <h2 className='text-white p-1 text-xl'>Pratik Mehta</h2>
                            <p className='text-white'>Our all i am very happy with my purchase and the expreiene i had with your website, I will certainly recommend you to friends and family and look forward to exploring more of your products in the future.</p>
                            <span className='flex mt-2'>
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}


