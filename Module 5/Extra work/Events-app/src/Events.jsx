import React from "react";
import { Container } from "react-bootstrap";
import {Add, Sub, Mult, Div} from './EventsJs.jsx'

function Events(){
    return(
        <>
        <Container className="p-5 mt-5 bg-gradient text-white">
            <h1>OnClick Events</h1>
            <hr className="mt-5 border border-2"/>

            <div className="mt-5">
                <button className="btn btn-primary fs-5" onClick={Add}>Additions</button>
                <button className="btn btn-primary fs-5 ms-5" onClick={Sub}>Subtraction</button>
                <button className="btn btn-primary fs-5 ms-5" onClick={Mult}>Multiplication</button>
                <button className="btn btn-primary fs-5 ms-5" onClick={Div}>Division</button>
            </div>
        </Container>
        </>
    )
}
export default Events