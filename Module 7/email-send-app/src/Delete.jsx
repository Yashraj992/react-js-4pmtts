import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Delete() {
    const [data,setData]=useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:8000/feedback/${id}`).then(()=>{
            navigate('/')
        })
    },[])
  return (
    <>
      
    </>
  )
}
