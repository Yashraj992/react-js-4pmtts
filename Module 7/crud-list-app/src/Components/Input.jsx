import React, { useEffect, useRef, useState } from 'react'
import img1 from '../assets/images/man.AVIF'
import axios from 'axios';
import { Form } from 'react-bootstrap';
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
            <div className="container p-5 mt-5 mx-auto shadow">
                <h2 className="text-white bg-primary p-3">
                    Employee Management systems
                    <button type="button" className="btn btn-md btn-outline-light text-white float-end" data-bs-toggle="modal" data-bs-target="#addemp">
                        Add Employee <span className="bi bi-person-add" />
                    </button>
                </h2>
                <hr className="border border-1 border-primary" />
                <div className="row">
                    <div className="col-md-4">
                        <img src={img1} className="img-fluid man" />
                    </div>
                    <div className="col-md-8">
                        <table className="table table-responsive table-bordered table-stripped table-hover">
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
                                                    <button className='btn btn-danger btn-sm text-white'  onClick={()=>{navigate(`delete-data/${item.id}`)}}>
                                                        <span className="bi bi-trash fs-5" />
                                                    </button>
                                                    {" "}|{" "}
                                                    <button className='btn btn-primary btn-sm text-black' onClick={()=>{navigate(`edit-data/${item.id}`)}}>
                                                        <span className="bi bi-pencil fs-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* create a employee add form */}
            <div className="modal fade" id="addemp" role="dialog" >
                <div className="modal-dialog" style={{ maxWidth: "70%", marginTop: "6%" }} >
                    <div className="modal-content" >
                        <div className="row" >
                            <div className="col-md-6 bg-primary p-5" >
                                <h1 className="text-white" >
                                    Add Employee <span className="bi bi-person-add" />
                                </h1>
                                <p className="text-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/6818/6818210.png" alt="person" className="img-fluid" />
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
                                        <button type='submit' className="btn btn-md btn-primary text-white">AddEmployee</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
