import React,{useState} from 'react'
import { Container,Form } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Controlled() {
    const [data,setData]=useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })

    const OnChange=(e)=>{
      const {name,value}=e.target;
      setData({
        ...data,
        [name]:value
      }
      )
    }

    const OnSubmit=(e)=>{
      e.preventDefault();
      console.log(data);
      Swal.fire({
        title: "Good job!",
        text: "Form submitted successfully!",
        icon: "success"
      });
    }
  return (
    <>
      <Container>
        <Form onSubmit={OnSubmit}>
            <h3 className='text-white'>Controlled Component Form Handling</h3>
            <div className='form-group'>
                <label>Name:</label>
                <input type="text" name='name' value={data.name} className='form-control' onChange={OnChange} placeholder='Name...'/>
            </div>
    
            <div className='form-group mt-4'>
                <label>Email:</label>
                <input type="text" name='email' value={data.email} className='form-control' onChange={OnChange} placeholder='Email...'/>
            </div>
    
            <div className='form-group mt-4'>
                <label>Phone:</label>
                <input type="text" name='phone' value={data.phone} className='form-control' onChange={OnChange} placeholder='Phone...'/>
            </div>
    
            <div className='form-group mt-4'>
                <label>Address:</label>
                <input type="text" name='address' value={data.address} className='form-control' onChange={OnChange}  placeholder='Address...'/>
            </div>
    
            <div className='form-group mt-4'>
                <button type="submit" name='name' className='btn btn-dark text-white' placeholder='Name...'>Submit</button>
            </div>
        </Form>
      </Container>
    </>
  )
}
