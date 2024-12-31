import React,{useState} from 'react'
import { Container,Form } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function App() {
  const [data,setData] = useState({
    name:'',
    email:'',
    phone:'',
    address:''
  });

  const inputChange = (e) => {
    const {name,value}=e.target;
    setData({
      ...data,
      [name]:value,
    });
  }

  const inputSubmit = (e) =>{
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
        <Form className="form bg-secondary p-5 mt-5 w-50 mx-auto rounded" onSubmit={inputSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name='name' placeholder='Name...' value={data.name} className='form-control' onChange={inputChange}/>
          </div>
          
          <div className="form-group mt-4">
            <label>Email:</label>
            <input type="text" name='email' placeholder='Email...' value={data.email} className='form-control' onChange={inputChange}/>
          </div>
          
          <div className="form-group mt-4">
            <label>Phone:</label>
            <input type="text" name='phone' placeholder='Phone...' value={data.phone} className='form-control' onChange={inputChange}/>
          </div>
          
          <div className="form-group mt-4">
            <label>Address:</label>
            <input type="text" name='address' placeholder='Address...' value={data.address} className='form-control' onChange={inputChange}/>
          </div>
          
          <div className="form-group mt-4">
            <button type="submit" className='btn btn-dark text-white'>Submit</button>
          </div>
        </Form>
      </Container>
    </>
  )
}
