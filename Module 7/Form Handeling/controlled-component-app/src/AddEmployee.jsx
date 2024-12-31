import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function AddEmployee() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const inputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const inputSubmit=(e)=>{
        e.preventDefault();
        Swal.fire({
            title: "Good job!",
            text: "Form submitted successfully!",
            icon: "success"
          });
          console.log(data);
    }
    return (
        <>
            <Container>
                <Form className='form mx-auto bg-secondary p-5 w-50 shadow mt-5 shadow' onSubmit={inputSubmit}>
                    <h3 className='text-white'>Controlled Component Form Handling</h3>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input type="text" name='name' className='form-control' value={data.name} placeholder='Name...' onChange={inputChange} />
                    </div>

                    <div className='form-group mt-4'>
                        <label>Email:</label>
                        <input type="text" name='email' className='form-control' value={data.email} placeholder='Email...' onChange={inputChange} />
                    </div>

                    <div className='form-group mt-4'>
                        <label>Phone:</label>
                        <input type="text" name='phone' className='form-control' value={data.phone} placeholder='Phone...' onChange={inputChange} />
                    </div>

                    <div className='form-group mt-4'>
                        <label>Address:</label>
                        <input type="text" name='address' className='form-control' value={data.address} placeholder='Address...' onChange={inputChange} />
                    </div>

                    <div className='form-group mt-4'>
                        <button type="submit" name='name' className='btn btn-dark text-white' placeholder='Name...'>Submit</button>
                    </div>
                </Form>
            </Container>
        </>
    )
}
