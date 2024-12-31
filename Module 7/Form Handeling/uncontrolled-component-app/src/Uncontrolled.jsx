import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap'
import Swal from 'sweetalert2';

export default function Uncontrolled() {
    const name = useRef("");
    const email = useRef("");
    const age = useRef("");
    const phone = useRef("");
    const address = useRef("");

    const OnSubmit = (e) => {
        var insert = {
            name: name.current.value,
            email: email.current.value,
            age: age.current.value,
            phone: phone.current.value,
            address: address.current.value,
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
            <Container className='mt-5 p-5 shadow'>
                <Form onSubmit={OnSubmit}>
                    <div className="form-group">
                        <input type="text" ref={name} placeholder='Enter your name' className='form-control mt-4' />
                    </div>

                    <div className="form-group">
                        <input type="text" ref={email} placeholder='Enter your email' className='form-control mt-4' />
                    </div>

                    <div className="form-group">
                        <input type="text" ref={age} placeholder='Enter your age' className='form-control mt-4' />
                    </div>

                    <div className="form-group">
                        <input type="text" ref={phone} placeholder='Enter your phone' className='form-control mt-4' />
                    </div>

                    <div className="form-group">
                        <input type="text" ref={address} placeholder='Enter your address' className='form-control mt-4' />
                    </div>

                    <div className="form-group">
                        <input type="submit" className='btn btn-dark text-white mt-4' value="submit" />
                    </div>
                </Form>
            </Container>
        </>
    )
}
