import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditData() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:9000/add/${id}`).then((response)=>{
            setData(response.data);
            taskname.current.value=response.data.taskname;
            taskdate.current.value=response.data.taskdate;
            taskassign.current.value=response.data.taskassign;
        })
    },[])

    const taskname=useRef("");
    const taskdate=useRef("");
    const taskassign=useRef("");
    const {id} = useParams();
    const navigate = useNavigate();

    const updateForm=(e)=>{
        e.preventDefault();
        var upd={
            taskname:taskname.current.value,
            taskdate:taskdate.current.value,
            taskassign:taskassign.current.value
        }

        axios.put(`http://localhost:9000/add/${id}`,upd).then(()=>{
            navigate('/');
        })
    }
    return (
        <>
            <Container className='mt-5 p-4 shadow'>
                <Row className='bg-danger p-4'>
                    <div className="col-md-9 fs-4 text-white">To Do App</div>
                    <div className="col-md-3 text-white fs-5">
                        Total Task: <button className='badge badge-sm bg-danger text-white'>{data.length}</button>
                    </div>
                </Row>

                <Form onSubmit={updateForm}>
                    <div className="input-group p-2">
                        <span className='input-group-text bi bi-pencil'></span>
                        <input type="text" ref={taskname} className='form-control' placeholder='Enter Task Name...' />
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
            </Container>
        </>
    )
}
