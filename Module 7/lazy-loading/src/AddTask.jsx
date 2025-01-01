import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import { useNavigate } from 'react-router-dom';
import img1 from './assets/loader.gif'

export default function AddTask() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/add`).then((response) => {
            setData(response.data);
        })
    }, [data])

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000)
    }, [])

    const [flash, setFlash] = useState(false);

    const taskname = useRef("");
    const taskdate = useRef("");
    const taskassign = useRef("");
    const navigate = useNavigate();

    const taskSubmit = (e) => {
        e.preventDefault();
        var task = {
            taskname: taskname.current.value,
            taskdate: taskdate.current.value,
            taskassign: taskassign.current.value
        }

        axios.post(`http://localhost:9000/add`, task)
            .then(() => {
                setFlash(true);
                e.target.reset();
            });
    }
    return (
        loader ?
            <>
                <div className='text-center' style={{marginTop:"200px"}}>
                    <img src={img1} alt="photo" className='img-fluid' style={{height:"300px",width:"300px"}}/>
                </div>
            </>
            :
            <>
                <Container className='mt-5 p-4 shadow'>
                    <Row className='bg-danger p-4'>
                        <div className="col-md-9 fs-4 text-white">To Do App</div>
                        <div className="col-md-3 text-white fs-5">
                            Total Task: <button className='badge badge-sm bg-danger text-white'>{data.length}</button>
                        </div>
                    </Row>

                    <h1 className='fs-3 mt-4 p-2'>Add Task</h1>
                    {flash && (<FlashMessage duration={3000}>
                        <div className='alert alert-success'>
                            <strong>Your task added successfully!</strong>
                        </div>
                    </FlashMessage>)}
                    <Form onSubmit={taskSubmit}>
                        <div className="input-group p-2">
                            <span className='input-group-text bi bi-pencil'></span>
                            <input type="text" ref={taskname} className='form-control' placeholder='Enter Task Name...' /> <br />
                        </div>

                        <div className="input-group p-2">
                            <span className='input-group-text bi bi-calendar'></span>
                            <input type="date" ref={taskdate} className='form-control' />
                        </div>

                        <div className="input-group p-2">
                            <span className='input-group-text bi bi-person'></span>
                            <input type="text" ref={taskassign} className='form-control' placeholder='Enter Task Assign Name...' />
                        </div>

                        <div className="input-group p-2">
                            <input type="submit" className='btn btn-dark text-white' value="Submit" />
                        </div>
                    </Form>

                    <table className='table-responsive table-bordered w-100'>
                        {data && data.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td className='p-2'>{item.taskname}</td>
                                        <td className='p-2'>{item.taskdate}</td>
                                        <td className='p-2'>{item.taskassign}</td>
                                        <td className='float-end'>
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
