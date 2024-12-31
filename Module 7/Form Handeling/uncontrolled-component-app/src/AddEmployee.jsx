import React, { useRef } from 'react'
import Swal from 'sweetalert2'
import { Container,Form } from 'react-bootstrap';

export default function AddEmployee() {
    const name = useRef("");
    const email = useRef("");
    const phone = useRef("");
    const address = useRef("");

    const inputChange = (e) => {
        var insert = {
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
            address:address.current.value,
        }
        e.preventDefault();
        console.log(insert);
        Swal.fire({
            title: "Good job!",
            text: "Form submitted successfully!",
            icon: "success"
          }); 
          e.target.reset();
    }
    return (
        <>
            <Container>
                <Form className='form mx-auto bg-secondary p-5 w-50 shadow mt-5 shadow' onSubmit={inputChange}>
                    <h3 className='text-white'>Controlled Component Form Handling</h3>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input type="text" ref={name} className='form-control' placeholder='Name...'/>
                    </div>

                    <div className='form-group mt-4'>
                        <label>Email:</label>
                        <input type="text" ref={email} className='form-control' placeholder='Email...'/>
                    </div>

                    <div className='form-group mt-4'>
                        <label>Phone:</label>
                        <input type="text" ref={phone} className='form-control' placeholder='Phone...'/>
                    </div>

                    <div className='form-group mt-4'>
                        <label>Address:</label>
                        <input type="text" ref={address} className='form-control'  placeholder='Address...'/>
                    </div>

                    <div className='form-group mt-4'>
                        <button type="submit" name='name' className='btn btn-dark text-white' placeholder='Name...'>Submit</button>
                    </div>
                </Form>
            </Container>
        </>
    )
}
