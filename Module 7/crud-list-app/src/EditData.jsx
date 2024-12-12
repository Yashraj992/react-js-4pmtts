import React, { useRef, useState, useEffect } from 'react'
// import { Container } from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditData() {
    const [data, setData] = useState([]);

    const name = useRef("");
    const firstname = useRef("");
    const lastname = useRef("");
    const address = useRef("");
    const age = useRef("");
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:4000/AddEmployee/${id}`).then((response) => {
            setData(response.data);
            name.current.value = response.data.name;
            firstname.current.value = response.data.firstname;
            lastname.current.value = response.data.lastname;
            address.current.value = response.data.address;
            age.current.value = response.data.age;
        });

    }, []);

    // update
    const updateData = (e) => {
        e.preventDefault();
        var update = {
            name: name.current.value,
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            address: address.current.value,
            age: age.current.value
        }

        axios.put(`http://localhost:4000/AddEmployee/${id}`, update).then(() => {
            Swal.fire({
                title: "Good job!",
                text: "Your task successfully added!",
                icon: "success"
            });
            navigate('/');
        })
    }
    return (
        <>
            <div>
                <Container className='mt-5 p-4 w-50 shadow mx-auto'>
                    <h1 className='fs-xl fs-4'>Update Task </h1>
                    <form>
                        <input type='text' ref={name} placeholder='Enter a Task' className='form-control mt-2' />
                        <br />

                        <input type='date' ref={firstname} placeholder='Enter First name' className='form-control mt-2' />
                        <br />

                        <input type='date' ref={lastname} placeholder='Enter Last name' className='form-control mt-2' />
                        <br />

                        <input type='date' ref={address} placeholder='Address' className='form-control mt-2' />
                        <br />

                        <input type='date' ref={age} placeholder='Age' className='form-control mt-2' />
                        <br />

                        <button type='button' onClick={updateData} className='btn btn-lg btn-dark text-white'>Update task</button>
                    </form>


                </Container>
            </div>
        </>
    )
}
