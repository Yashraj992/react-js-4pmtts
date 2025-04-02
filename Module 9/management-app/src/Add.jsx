import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FlashMessage from 'react-flash-message'
import axios from 'axios'

export default function Add() {
    const navigate=useNavigate()
    const [flash,setFlash]=useState(false)
    const [data,setData]=useState({
        ename:"",
        eemail:""
    })
    const [add,setAdd]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/data`).then((response)=>{
            setAdd(response.data);
        })
    },[])

    const [errors,setErrors]=useState({})
    const validate=()=>{
        const errors={}
        if(!data.ename){
            errors.ename="please enter your name"
        }
        if(!data.eemail){
            errors.eemail="please enter your email"
        }
        return errors;
    }

    const inputChange=(e)=>{
        const{name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const inputSubmit=(e)=>{
        e.preventDefault(e);
        const errors=validate();
        if(Object.keys(errors).length===0){
            axios.post(`http://localhost:8000/data`,data).then(()=>{
                setFlash(true);
            })
        }
        else{
            setErrors(errors)
        }
    }
  return (
    <>
      <Container className='mt-5 p-5 shadow'>
        {flash && <FlashMessage duration={4000}>
            <div className="alert alert-success">
                <p>Data added successfully!</p>
            </div>
            </FlashMessage>}
        <Form onSubmit={inputSubmit}>
            <div className="input-group mt-4">
                <input type="text" name='ename' onChange={inputChange} value={data.ename} className='form-control' placeholder='Enter your name...'/>
                {errors.ename && <p style={{color:"red"}}>{errors.ename}</p>}
            </div>

            <div className="input-group mt-4">
                <input type="email" name='eemail' onChange={inputChange} value={data.eemail} className='form-control' placeholder='Enter your email...'/>
                {errors.eemail && <p style={{color:"red"}}>{errors.eemail}</p>}
            </div>

            <div className="input-group mt-4">
                <input type="submit" className='btn btn-dark text-white' />
            </div>
        </Form>

        <table className='table-responsive table-bordered w-100'>
            {add && add.map((item)=>{
                return(
                    <>
                    <tr>
                        <td>{item.ename}</td>
                        <td>{item.eemail}</td>
                        <td>
                            <button onClick={()=>{navigate(`delete/${item.id}`)}} className='btn btn-danger text-white'>Delete</button>
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
