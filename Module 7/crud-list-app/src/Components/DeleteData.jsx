import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DeleteData() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:8000/employee/${id}`)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Employee delete successfully!",
                    icon: "success"
                });
                navigate('/')
            })
    })
    return (
        <>

        </>
    )
}
