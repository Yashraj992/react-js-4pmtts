import React from "react";
import { Container } from "react-bootstrap";
import {Add,Sub,Mult,Div} from './Calc.jsx'

function App(){
    return(
        <>
        <Container className="w-50 p-5 mt-5 shadow text-center bg-white">
            <h1>Calculator</h1>
            <hr className="w-50 mx-auto border border-2 border-black"/>
            <div>
                <button className="btn btn-info" onClick={Add}>Additions</button>
                <button className="btn btn-info ms-5" onClick={Sub}>Substration</button>
                <button className="btn btn-info ms-5" onClick={Mult}>multiplication</button>
                <button className="btn btn-info ms-5" onClick={Div}>Divition</button>
            </div>
        </Container>
        </>
    )
}

export default App