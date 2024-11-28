import React from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'
import { Row, Container } from 'react-bootstrap'

export default function ManageEmployee() {
    return (
        <div>
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
                                <h2 className='text-white p-1 text-xl'>Current Employee</h2>
                                <br />
                                <button className='btn btn-light border-0 fs-5 mt-2'>35</button>
                            </div>
                            <div className="col-md-3 ms-5 p-3 rounded" style={{ backgroundColor: "#1d3247" }}>
                                <h2 className='text-white p-1 text-xl'>Fired Employee</h2>
                                <br />
                                <button className='btn btn-light border-0 fs-5 mt-2'>25</button>
                            </div>
                            <div className="col-md-3 ms-5 p-3 rounded" style={{ backgroundColor: "#1d3247" }}>
                                <h2 className='text-white p-1 text-xl'>New Joining</h2>
                                <br />
                                <button className='btn btn-light border-0 fs-5 mt-2'>10</button>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
