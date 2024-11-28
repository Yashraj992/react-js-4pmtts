import React from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'
import { Row, Container } from 'react-bootstrap'

export default function ManageContact() {
    return (
        <>
            <Header />

            <Container fluid>
                <Row>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <h1 className='p-5 text-3xl'>Manage Employee</h1>

                        <Row className='text-center p-5'>
                            <div className="col-md-3 p-3 rounded" style={{ backgroundColor: "#1d3247" }}>
                                <h2 className='text-white p-1 text-xl'>Manager</h2>
                                <p className='text-white'>+91 7859742358</p>
                                <br />
                                <button className='btn btn-light border-0 mt-2'>Add</button> <br />
                                <button className='btn btn-danger border-0 mt-2'>Remove</button>
                            </div>
                            <div className="col-md-3 ms-5 p-3 rounded" style={{ backgroundColor: "#1d3247" }}>
                                <h2 className='text-white p-1 text-xl'>Assistant Manager</h2>
                                <p className='text-white'>+91 9831567894</p>
                                <br />
                                <button className='btn btn-light border-0 mt-2'>Add</button> <br />
                                <button className='btn btn-danger border-0 mt-2'>Remove</button>

                            </div>
                            <div className="col-md-3 ms-5 p-3 rounded" style={{ backgroundColor: "#1d3247" }}>
                                <h2 className='text-white p-1 text-xl'>Employee</h2>
                                <p className='text-white'>+91 85794681328</p>
                                <br />
                                <button className='btn btn-light border-0 mt-2'>Add</button> <br />
                                <button className='btn btn-danger border-0 mt-2'>Remove</button>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    )
}


