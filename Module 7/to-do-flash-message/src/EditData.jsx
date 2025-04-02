import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/add/${id}`).then((response) => {
            setData(response.data);
            taskid.current.value = response.data.taskid;
            taskname.current.value = response.data.taskname;
            taskphone.current.value = response.data.taskphone;
            taskdepartment.current.value = response.data.taskdepartment;
            taskstatus.current.value = response.data.taskstatus;
        })
    }, [])

    const taskid = useRef("");
    const taskname = useRef("");
    const taskphone = useRef("");
    const taskdepartment = useRef("");
    const taskstatus = useRef("");
    const { id } = useParams();
    const navigate = useNavigate();

    const updateForm = (e) => {
        e.preventDefault();
        var upd = {
            taskid: taskid.current.value,
            taskname: taskname.current.value,
            taskphone: taskphone.current.value,
            taskdepartment: taskdepartment.current.value,
            taskstatus: taskstatus.current.value
        }

        axios.put(`http://localhost:9000/add/${id}`, upd).then(() => {
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
            </Container>
        </>
    )
}
