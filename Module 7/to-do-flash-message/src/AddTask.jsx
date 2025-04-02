import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/add`).then((response) => {
            setData(response.data);
        })
    }, [data])

    const [flash, setFlash] = useState(false);

    const taskid = useRef("");
    const taskname = useRef("");
    const taskphone = useRef("");
    const taskdepartment = useRef("");
    const taskstatus = useRef("");
    const navigate = useNavigate();

    const taskSubmit = (e) => {
        e.preventDefault();
        var task = {
            taskid: taskid.current.value,
            taskname: taskname.current.value,
            taskphone: taskphone.current.value,
            taskdepartment: taskdepartment.current.value,
            taskstatus: taskstatus.current.value
        }

        axios.post(`http://localhost:9000/add`, task)
            .then(() => {
                setFlash(true);
                e.target.reset();
            });
    }
    return (
        <>
            <Container className='mt-5 p-4 shadow rounded'>
                <Row className='bg-secondary p-4 shadow rounded'>
                    <div className="col-md-9 fs-4 fw-semibold">Management App</div>
                    <div className="col-md-3 fw-semibold fs-5">
                        Total Employee: <button className='badge badge-sm bg-dark text-white'>{data.length}</button>
                    </div>
                </Row>

                <h1 className='fs-3 mt-5 p-2'>Add Task</h1>
                {flash && (<FlashMessage duration={3000}>
                    <div className='alert alert-success'>
                        <strong>Your task added successfully!</strong>
                    </div>
                </FlashMessage>)}
                <Form onSubmit={taskSubmit}>
                <div className="input-group p-2">
                        <span className='input-group-text'>ID</span>
                        <input type="tel" ref={taskid} className='form-control' placeholder='Enter Employee Id...' /> <br />
                    </div>

                    <div className="input-group p-2">
                        <span className='input-group-text'>NAME</span>
                        <input type="text" ref={taskname} className='form-control' placeholder='Enter Employee Name...' /> <br />
                    </div>

                    <div className="input-group p-2">
                        <span className='input-group-text'>PHONE</span>
                        <input type="tel" ref={taskphone} className='form-control' placeholder='Enter Employee Phone Number...' /> <br />
                    </div>

                    <div className="input-group p-2">
                        <span className='input-group-text'>DEPARTMENT</span>
                        <input type="text" ref={taskdepartment} className='form-control' placeholder='Enter Employee Department...' /> <br />
                    </div>

                    <div className="input-group p-2">
                        <span className='input-group-text'>WORKING STATUS</span>
                        <input type="text" ref={taskstatus} className='form-control' placeholder='Enter Employee Working Status...' /> <br />
                    </div>

                    <div className="input-group p-2">
                        <input type="submit" className='btn btn-dark text-white' value="Submit" />
                    </div>
                </Form>

                <table className='table-responsive table-bordered w-100 mt-5'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Department</th>
                        <th>Working Status</th>
                        <th>Manage</th>
                    </tr>
                    {data && data.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td className='p-2'>{item.taskid}</td>
                                    <td className='p-2'>{item.taskname}</td>
                                    <td className='p-2'>{item.taskphone}</td>
                                    <td className='p-2'>{item.taskdepartment}</td>
                                    <td className='p-2'>{item.taskstatus}</td>
                                    <td>
                                        <button type='button' onClick={() => { navigate(`delete-data/${item.id}`) }} className='btn btn-danger text-white'><span className='bi bi-trash'></span></button> &nbsp;
                                        <button type='button' onClick={() => { navigate(`edit-data/${item.id}`) }} className='btn btn-danger text-white'><span className='bi bi-pencil'></span></button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </Container>
        </>
    )
}
