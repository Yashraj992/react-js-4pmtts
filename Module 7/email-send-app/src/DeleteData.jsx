import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DeleteData() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:9000/customer/${id}`).then(() => {
            Swal.fire({
                title: "Good job!",
                text: "Your feedback deleted!",
                icon: "success"
            });
            navigate('/')
        })
    }, [])
    return (
        <>

        </>
    )
}
