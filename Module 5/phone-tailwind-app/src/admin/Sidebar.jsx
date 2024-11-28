import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <Container fluid className='sidebar shadow p-4 bg-slate-800' style={{ height: "650px"}}>
        <Link to={"/admin"} className='text-white text-decoration-none'><button className='btn btn-light mt-4 side-btn'><i class="bi bi-window me-2 text-xl"></i>Dashboard</button></Link>
        <br />

        <Link to={"/manage-employee"} className='text-white text-decoration-none'><button className='btn btn-light mt-4 side-btn'><i class="bi bi-person me-2 text-xl"></i>Manage employee</button></Link>
        <br />

        <Link to={"/add-product"} className='text-white text-decoration-none'><button className='btn btn-light mt-4 side-btn'><i class="bi bi-clipboard2-minus me-2 text-xl"></i>Add Product Categories</button></Link>
        <br />

        <Link to={"/add-subproduct"} className='text-white text-decoration-none'><button className='btn btn-light mt-4 side-btn'><i class="bi bi-clipboard2-plus me-2 text-xl"></i>Add Product Sub-Categories</button></Link>
        <br />

        <Link to={"/manage-contact"} className='text-white text-decoration-none'><button className='btn btn-light mt-4 side-btn'><i class="bi bi-telephone me-2 text-xl"></i>Manage Contact</button></Link>
        <br />

        <Link to={"/manage-feedback"} className='text-white text-decoration-none'><button className='btn btn-light mt-4 side-btn'><i class="bi bi-pencil-square me-2 text-xl"></i>Manage Feedback</button></Link>
        <br />
      </Container>
    </div>
  )
}
