import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import customer from './assets/customer.gif'
import axios from 'axios';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function CustomerFeedback() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/customer`).then((response) => {
            setData(response.data);
        })
    },[data])

    const name = useRef("");
    const email = useRef("");
    const phone = useRef("");
    const feedback = useRef("");
    const serviceID = "service_9m8ezku";
    const templateID = "template_1lavg17";
    const publicKey = "sRoKvedNdoXmzNDJq";
    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, publicKey);

        var customer = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            feedback: feedback.current.value
        }

        axios.post(`http://localhost:9000/customer`, customer).then(() => {
            Swal.fire({
                title: "Good job!",
                text: "Your feedback successfully sended!",
                icon: "success"
            });
            e.target.reset();
        })
    }
    return (
        <>
            <Container className='mt-5 p-5 shadow'>
                <h1>Customer Feedback</h1>
                <hr />
                <Row>
                    <div className="col-md-6">
                        <img src={customer} alt="" className='img-fluid' />
                    </div>

                    <div className="col-md-6">
                        <Form onSubmit={formSubmit}>
                            <div className="form-group">
                                <input type="text" ref={name} name='name' placeholder='Enter your name...' className='form-control' />
                            </div>

                            <div className="form-group mt-4">
                                <input type="email" ref={email} name='email' placeholder='Enter your email...' className='form-control' />
                            </div>

                            <div className="form-group mt-4">
                                <input type="tel" ref={phone} name='phone' placeholder='Enter your phone...' className='form-control' />
                            </div>

                            <div className="form-group mt-4">
                                <input type="text" ref={feedback} name='feedback' placeholder='Enter your feedback...' className='form-control' />
                            </div>

                            <div className="form-group mt-4">
                                <input type="submit" className='btn btn-dark text-white' />
                            </div>
                        </Form>
                    </div>
                </Row>

                <table className='table-responsive table-bordered w-100'>
                    {data && data.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td className='p-2'>{item.name}</td>
                                    <td className='p-2'>{item.email}</td>
                                    <td className='p-2'>{item.phone}</td>
                                    <td className='p-2'>{item.feedback}</td>
                                    <td>
                                        <button type='button' onClick={()=>{navigate(`delete-data/${item.id}`)}} className='btn btn-danger text-white'>Delete</button>
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
