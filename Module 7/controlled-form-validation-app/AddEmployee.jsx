import React, { useState } from 'react'
import { Container, Row, Form } from 'react-bootstrap'
import emp from './src/emp.gif'
import Swal from 'sweetalert2';

export default function AddEmployee() {
    const [data, setData] = useState({
        empname: '',
        empemail: '',
        empage: '',
        empphone: '',
        empsalary: '',
        empaddress: ''
    });

    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = {};
        if (!data.empname) {
            errors.empname = "please enter your name"
        }
        if (!data.empemail) {
            errors.empemail = "please enter your email"
        }
        if (!data.empage) {
            errors.empage = "please enter your age"
        }
        if (!data.empphone) {
            errors.empphone = "please enter your phone"
        }
        if (!data.empsalary) {
            errors.empsalary = "please enter your salary"
        }
        if (!data.empaddress) {
            errors.empaddress = "please enter your address"
        }
        return errors;
    }

    const formChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            console.log(data)
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
                        <img src={emp} alt="" className='img-fluid' />
                    </div>

                    <div className="col-md-8">
                        <Form onSubmit={formSubmit}>
                            <div className="from-group mt-4">
                                <input type="text" name='empname' value={data.empname} className='form-control' placeholder='enter your name' onChange={formChange} />
                                {errors.empname && <p style={{ color: "red" }}>{errors.empname}</p>}
                            </div>

                            <div className="from-group mt-4">
                                <input type="email" name='empemail' value={data.empemail} className='form-control' placeholder='enter your email' onChange={formChange} />
                                {errors.empemail && <p style={{ color: "red" }}>{errors.empemail}</p>}
                            </div>

                            <div className="from-group mt-4">
                                <input type="text" name='empage' value={data.empage} className='form-control' placeholder='enter your age' onChange={formChange} />
                                {errors.empage && <p style={{ color: "red" }}>{errors.empage}</p>}
                            </div>

                            <div className="from-group mt-4">
                                <input type="tel" name='empphone' value={data.empphone} className='form-control' placeholder='enter your phone' onChange={formChange} />
                                {errors.empphone && <p style={{ color: "red" }}>{errors.empphone}</p>}
                            </div>

                            <div className="from-group mt-4">
                                <input type="text" name='empsalary' value={data.empsalary} className='form-control' placeholder='enter your salary' onChange={formChange} />
                                {errors.empsalary && <p style={{ color: "red" }}>{errors.empsalary}</p>}
                            </div>

                            <div className="from-group mt-4">
                                <input type="text" name='empaddress' value={data.empaddress} className='form-control' placeholder='enter your address' onChange={formChange} />
                                {errors.empaddress && <p style={{ color: "red" }}>{errors.empaddress}</p>}
                            </div>

                            <div className="from-group mt-4">
                                <input type="submit" value="submit" className='btn btn-dark text-white' />
                            </div>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
