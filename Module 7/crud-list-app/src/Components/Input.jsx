import React, { useEffect, useRef, useState } from 'react'
import img1 from '../assets/images/image.gif'
import img2 from '../assets/images/img1.gif'
import axios from 'axios';
import { Form, Row, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Input() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/employee`).then((response) => {
            setData(response.data)
        })
    }, [data])

    const empname = useRef("");
    const empfname = useRef("");
    const emplname = useRef("");
    const empaddress = useRef("");
    const empage = useRef("");
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        var insert = {
            empname: empname.current.value,
            empfname: empfname.current.value,
            emplname: emplname.current.value,
            empaddress: empaddress.current.value,
            empage: empage.current.value
        }

        axios.post(`http://localhost:8000/employee`, insert)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Employee added successfully!",
                    icon: "success"
                });
                e.target.reset();
            })
    }

    return (
        <>
            <Container className="container p-5 mt-5 mx-auto shadow">
                <h2 className="text-white bg-primary p-3">
                    Employee Management systems
                    <button type="button" className="btn btn-md btn-outline-light text-white float-end" data-bs-toggle="modal" data-bs-target="#addemp">
                        Add Employee <span className="bi bi-person-add" />
                    </button>
                </h2>
                <hr className="border border-1 border-primary" />
                <Row className="row">
                    <div className="col-md-4">
                        <img src={img1} className="img-fluid" />
                    </div>
                    <div className="col-md-8 table-responsive">
                        <table className="table table-responsive table-bordered table-hover">
                            <thead>
                                <tr className="bg-primary text-white text-center">
                                    <th>Name</th>
                                    <th>FName</th>
                                    <th>LName</th>
                                    <th>Address</th>
                                    <th>Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item) => {
                                    return (
                                        <>
                                            <tr className="text-center">
                                                <td>{item.empname}</td>
                                                <td>{item.empfname}</td>
                                                <td>{item.emplname}</td>
                                                <td>{item.empaddress}</td>
                                                <td>{item.empage}</td>
                                                <td>
                                                    <button className='btn btn-danger btn-sm text-white bi bi-trash fs-5' onClick={() => { navigate(`delete-data/${item.id}`) }}></button>
                                                    {" "}|{" "}
                                                    <button className='btn btn-primary btn-sm text-black bi bi-pencil fs-5' onClick={() => { navigate(`edit-data/${item.id}`) }}></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </Row>
            </Container>


            {/* create a employee add form */}
            <div className="modal fade" id="addemp" role="dialog" >
                <div className="modal-dialog" style={{ maxWidth: "70%", marginTop: "6%" }} >
                    <div className="modal-content" >
                        <Row className="row">
                            <div className="col-md-6 p-5" style={{ backgroundColor: "#4a6cd1" }} >
                                <h1 className='p-1 text-white'>
                                    Add Employee <span className="bi bi-person-add" />
                                </h1>
                                <p className="text-center">
                                    <img src={img2} alt="person" className="img-fluid rounded" />
                                </p>
                            </div>
                            <div className="col-md-6 p-5 mt-5" >
                                <h6 className="float-end" >
                                    <button type="button" className="btn btn-sm btn-danger text-white" data-bs-dismiss="modal">
                                        ×
                                    </button>
                                </h6>
                                <Form onSubmit={handelSubmit}>
                                    <div className="form-group mt-3">
                                        <input type="text" ref={empname} placeholder="Name" className="form-control" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" ref={empfname} placeholder="Firtname" className="form-control" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" ref={emplname} placeholder="Lastname" className="form-control" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea ref={empaddress} placeholder="Address" className="form-control" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" ref={empage} placeholder="Age" className="form-control" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type='submit' className="btn btn-md btn-primary text-white" style={{ backgroundColor: "#4a6cd1" }}>AddEmployee</button>
                                    </div>
                                </Form>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}
