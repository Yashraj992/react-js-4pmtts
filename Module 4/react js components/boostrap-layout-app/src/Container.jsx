import React from "react";
import { Container, Row } from "react-bootstrap";

function App(){
    return(
        <>
        <Container className="p-5 bg-black mt-5">
            <h1 className="text-center text-white">Hi i am using bootstrap.</h1>
            <Row>
                <div className="mt-5 col-md-4 bg-danger p-5"></div>
                <div className="mt-5 col-md-4 bg-info p-5"></div>
                <div className="mt-5 col-md-4 bg-primary p-5"></div>
                <div className="col-md-12 p-5">
                    <button className="btn btn-md btn-dark">Click Me</button>
                    <button className="btn btn-md btn-danger ms-5" data-bs-toggle="modal" data-bs-target="#book">Book hotel <span className="bi bi-book"></span></button>
                </div>
            </Row>
        </Container>
        </>
    )
}
export default App