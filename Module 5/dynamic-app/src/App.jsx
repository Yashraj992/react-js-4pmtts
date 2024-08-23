import React from "react";
import Data from "./Data";
import { Container, Card, CardBody, Row } from "react-bootstrap";

function App(){
    return(
    <>
    <Container className="mt-5">
        <h2>User Information</h2>
        <hr />

        <div>
            <button className="btn btn-info text-white">User<i className="bi bi-person ms-3"></i> <i className="badge bg-danger bg-red">{Data.length}</i></button>
            <button className="btn btn-dark text-white ms-5">Active user<i className="bi bi-person ms-3"></i></button>
            <button className="btn btn-danger text-white ms-5">Remove user<i className="bi bi-person ms-3"></i></button>
        </div>

        {Data && Data.map((Row)=>{
            return(
                <>
            <Card className="mt-5 shadow">
            <CardBody>
                <table className="table">
                    <tr>
                        <td><img className="rounded-circle" src={Row.img} alt="" style={{height:"80px"}}/></td>
                        <td>{Row.id}</td>
                        <td>{Row.name}</td>
                        <td>{Row.age}</td>
                        <td>{Row.salary}</td>
                    </tr>
                </table>
            </CardBody>
        </Card></>)
        })}
        
    </Container>
    </>
    )
}
 
export default App