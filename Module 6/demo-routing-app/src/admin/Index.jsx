import React from 'react'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'
import { Row, Container } from 'react-bootstrap'
import Dashboard from './Dashboard'

export default function Index() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        <Dashboard />
                    </div>
                </Row>
            </Container>
        </div>
    )
}
