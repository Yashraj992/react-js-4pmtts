import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Form } from 'react-bootstrap'
import img1 from './assets/feedback.gif'
import FlashMessage from 'react-flash-message'
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export default function Email() {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/feedback`).then((response)=>{
            setTask(response.data);
        })
    },[task])

    const name = useRef("");
    const email = useRef("");
    const phone = useRef("");
    const feedback = useRef("");
    const navigate = useNavigate();
    const serviceID = "service_uoxktwr";
    const templateID = "template_1lavg17";
    const publicKey = "sRoKvedNdoXmzNDJq";

    const [flash, setFlash] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        var feed = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            feedback: feedback.current.value
        }

        axios.post(`http://localhost:8000/feedback`, feed).then(() => {
            emailjs.sendForm(serviceID, templateID, e.target, publicKey );
            setFlash(true);
            e.target.reset();
        },[]);
    }
    return (
        <>
            <Container className='mt-5 p-5 shadow'>
                {flash && <FlashMessage duration={4000}>
                    <div className='alert alert-danger'>
                        <strong>Your feedback send successfully!</strong>
                    </div>
                </FlashMessage>}
                
                <Row>
                    <div className="col-md-6">
                        <img src={img1} alt="" className='img-fluid' />
                    </div>

                    <div className="col-md-6">
                        <Form onSubmit={formSubmit}>
                            <div className="input-group mt-4">
                                <span className='input-group-text bi bi-person'></span>
                                <input type="text" ref={name} name='name' className='form-control' placeholder='Enter Your Name...' />
                            </div>

                            <div className="input-group mt-4">
                                <span className='input-group-text bi bi-envelope'></span>
                                <input type="email" ref={email} name='email' className='form-control' placeholder='Enter Your Email...' />
                            </div>

                            <div className="input-group mt-4">
                                <span className='input-group-text bi bi-telephone'></span>
                                <input type="tel" ref={phone} name='phone' className='form-control' placeholder='Enter Your Phone...' />
                            </div>

                            <div className="input-group mt-4">
                                <span className='input-group-text bi bi-envelope-open'></span>
                                <input type="text" ref={feedback} name='feedback' className='form-control' placeholder='Enter Your Feedback...' />
                            </div>

                            <div className="input-group mt-4">
                                <input type="submit" className='btn btn-dark text-white' value="Submit" />
                            </div>
                        </Form>
                    </div>
                </Row>

                <table className='table-responsive table-bordered w-100 mt-4'>
                    {task && task.map((item)=>{
                        return(
                            <>
                            <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.feedback}</td>
                            <td>
                                <button type='button' onClick={()=>{navigate(`delete-data/${item.id}`)}} className='btn btn-danger text-white'><span className='bi bi-trash'></span></button>
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
