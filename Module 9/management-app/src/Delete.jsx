import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Delete() {
    const {id}=useParams()
    const navigate=useNavigate();

    axios.delete(`http://localhost:8000/data/${id}`).then(()=>{
        navigate('/')
    })
  return (
    <div>
      
    </div>
  )
}
