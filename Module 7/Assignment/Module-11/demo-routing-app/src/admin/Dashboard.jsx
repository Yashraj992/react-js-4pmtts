import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Dashboard() {
    return (
        <div>
            <Container>
                <h3 className='p-5'>Welcome to Admin Dashboard</h3>
            </Container>

            <Row className='text-center p-5'>
                <div className="col-md-4 bg-black w-25 p-3 rounded">
                    <h2 className='text-white'>Total Order</h2>
                    <br />
                    <button className='btn btn-danger border-0 fs-5 mt-5' style={{backgroundColor:"#704204"}}>35</button>
                </div>
                <div className="col-md-4 bg-black w-25 ms-5 p-3 rounded">
                    <h2 className='text-white'>Complete Order</h2>
                    <br />
                    <button className='btn btn-danger border-0 fs-5 mt-2' style={{backgroundColor:"#704204"}}>25</button>
                </div>
                <div className="col-md-4 bg-black w-25 ms-5 p-3 rounded">
                    <h2 className='text-white'>Pending Payment</h2>
                    <br />
                    <button className='btn btn-danger border-0 fs-5 mt-2' style={{backgroundColor:"#704204"}}>10</button>
                </div>
            </Row>
        </div>
    )
}
