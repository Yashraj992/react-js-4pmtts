import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteData() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:9000/add/${id}`).then(() => {
            navigate('/');
        })
    }, [])
    return (
        <>
            
        </>
    )
}
