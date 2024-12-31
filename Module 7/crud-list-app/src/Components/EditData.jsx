import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Container,Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditData() {

    const [data, setData] = useState([]);
    const empname = useRef("");
    const empfname = useRef("");
    const emplname = useRef("");
    const empaddress = useRef("");
    const empage = useRef("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/employee/${id}`).then((response)=>{
            setData(response.data);
            empname.current.value=response.data.empname;
            empfname.current.value=response.data.empfname;
            emplname.current.value=response.data.emplname;
            empaddress.current.value=response.data.empaddress;
            empage.current.value=response.data.empage;
        })
    },[])

    const updateData = (e) => {
        e.preventDefault();
        var upd = {
            empname: empname.current.value,
            empfname: empfname.current.value,
            emplname: emplname.current.value,
            empaddress: empaddress.current.value,
            empage: empage.current.value,
        }

        axios.put(`http://localhost:8000/employee/${id}`, upd)
            .then(() => {
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
            <Container className='mt-5 p-5 shadow'>
                <h1>Edit Data</h1>
                <Form>
                    <div className="form-group mt-3">
                        <input type="text" ref={empname} placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" ref={empfname} placeholder="Firtname" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" ref={emplname} placeholder="Lastname" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <textarea ref={empaddress} placeholder="Address" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" ref={empage} placeholder="Age" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <button type='submit' onClick={updateData} className="btn btn-md btn-primary text-white">Update Data</button>
                    </div>
                </Form>
            </Container>
        </>
    )
}
