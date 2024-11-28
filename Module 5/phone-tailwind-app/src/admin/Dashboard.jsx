import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Dashboard() {
    return (
        <div>
            <Container>
                <h3 className='p-5 text-3xl'>Welcome to Admin Dashboard</h3>
            </Container>

            <Row className='text-center p-5'>
                <div className="col-md-3 p-3 rounded" style={{backgroundColor:"#1d3247"}}>
                    <h2 className='text-white p-1 text-xl'>Total Order</h2>
                    <br />
                    <button className='btn btn-light border-0 fs-5 mt-2'>35</button>
                </div>
                <div className="col-md-3 ms-5 p-3 rounded" style={{backgroundColor:"#1d3247"}}>
                    <h2 className='text-white p-1 text-xl'>Complete Order</h2>
                    <br />
                    <button className='btn btn-light border-0 fs-5 mt-2'>25</button>
                </div>
                <div className="col-md-3 ms-5 p-3 rounded" style={{backgroundColor:"#1d3247"}}>
                    <h2 className='text-white p-1 text-xl'>Pending Payment</h2>
                    <br />
                    <button className='btn btn-light border-0 fs-5 mt-2'>10</button>
                </div>
            </Row>
        </div>
    )
}
