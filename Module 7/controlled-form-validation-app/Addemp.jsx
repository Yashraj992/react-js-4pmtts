import React, { useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import emp from './src/emp.gif'
import Swal from 'sweetalert2'

export default function Addemp() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        age: ''
    });

    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = {};
        if (!data.name) {
            errors.name = "please enter your name"
        }
        if (!data.email) {
            errors.email = "please enter your email"
        }
        if (!data.phone) {
            errors.phone = "please enter your phone"
        }
        if (!data.age) {
            errors.age = "please enter your age"
        }
        return errors;
    }

    const inputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const inputSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            console.log(data);
            Swal.fire({
                title: "Good job!",
                text: "Form submitted susscefully!",
                icon: "success"
            });
        }
        else{
            setErrors(errors);
        }
    }
    return (
        <>
            <Container className='mt-5 p-5 shadow'>
                <Row>
                    <div className="col-md-4">
                        <img src={emp} className='img-fluid' />
                    </div>

                    <div className="col-md-8">
                        <Form onSubmit={inputSubmit}>
                            <div className="form-group">
                                <input type="text" name='name' value={data.name} className='form-control mt-4' placeholder='enter your name' onChange={inputChange} />
                                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                            </div>

                            <div className="form-group">
                                <input type="email" name='email' value={data.email} className='form-control mt-4' placeholder='enter your email' onChange={inputChange} />
                                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                            </div>

                            <div className="form-group">
                                <input type="tel" name='phone' value={data.phone} className='form-control mt-4' placeholder='enter your phone' onChange={inputChange} />
                                {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
                            </div>

                            <div className="form-group">
                                <input type="text" name='age' value={data.age} className='form-control mt-4' placeholder='enter your age' onChange={inputChange} />
                                {errors.age && <p style={{color:"red"}}>{errors.age}</p>}
                            </div>

                            <div className="from-group">
                                <input type="submit" value="Submit" className='btn btn-dark text-white mt-4' />
                            </div>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
