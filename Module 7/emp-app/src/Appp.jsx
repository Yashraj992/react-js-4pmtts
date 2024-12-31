import React,{useRef} from 'react'
import { Container,Form } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Appp() {
    const name=useRef("");
    const email=useRef("");
    const phone=useRef("");
    const address=useRef("");

    const inputSubmit=(e)=>{
        e.preventDefault();
        var insert={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
            address:address.current.value,
        }
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
                <Form className="form bg-secondary p-5 mt-5 w-50 mx-auto rounded" onSubmit={inputSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" ref={name} placeholder='Name...' className='form-control' />
                    </div>

                    <div className="form-group mt-4">
                        <label>Email:</label>
                        <input type="text" ref={email} placeholder='Email...' className='form-control' />
                    </div>

                    <div className="form-group mt-4">
                        <label>Phone:</label>
                        <input type="text" ref={phone} placeholder='Phone...' className='form-control' />
                    </div>

                    <div className="form-group mt-4">
                        <label>Address:</label>
                        <input type="text" ref={address} placeholder='Address...' className='form-control' />
                    </div>

                    <div className="form-group mt-4">
                        <button type="submit" className='btn btn-dark text-white'>Submit</button>
                    </div>
                </Form>
            </Container>
        </>
    )
}
