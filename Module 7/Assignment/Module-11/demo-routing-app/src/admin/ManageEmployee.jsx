import React from 'react'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'
import { Row, Container } from 'react-bootstrap'

export default function ManageEmployee() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <h1 className='p-5'>Manage Employee</h1>

                        <Row className='text-center text-white'>
                            <div className="col-md-4 bg-black rounded p-3 w-25 ms-5">
                                <h2>Current Employee</h2>
                                <br />
                                <button className='btn btn-light border-0 text-white mt-3 btn-lg' style={{backgroundColor:"#704204"}}>25</button>
                            </div>
                            <div className="col-md-4 bg-black rounded p-3 w-25 ms-5">
                                <h2>Fired Employee</h2>
                                <br />
                                <button className='btn btn-light border-0 text-white mt-5 btn-lg' style={{backgroundColor:"#704204"}}>7</button>
                            </div>
                            <div className="col-md-4 bg-black rounded p-3 w-25 ms-5">
                                <h2>New Joining</h2>
                                <br />
                                <button className='btn btn-light border-0 text-white mt-5 btn-lg' style={{backgroundColor:"#704204"}}>5</button>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
