import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <Container fluid className='sidebar shadow p-4' style={{ height: "650px" }}>
        <Link to={"/dashboard"} className='text-white text-decoration-none'><button className='btn btn-secondary mt-4 side-btn'><i class="bi bi-window me-2"></i>Dashboard</button></Link>
        <br />

        <Link to={"/manage-employee"} className='text-white text-decoration-none'><button className='btn btn-secondary mt-4 side-btn'><i class="bi bi-person me-2"></i> Manage employee</button></Link>
        <br />

        <button className='btn btn-secondary mt-4 side-btn'><i class="bi bi-clipboard2-minus me-2"></i>  Add Jewellary Categories</button>
        <br />

        <button className='btn btn-secondary mt-4 side-btn'><i class="bi bi-clipboard2-plus me-2"></i>  Add Jewellary Sub-Categories</button>
        <br />

        <button className='btn btn-secondary mt-4 side-btn'><i class="bi bi-patch-question me-2"></i>  Add Jewellary Product</button>
        <br />

        <button className='btn btn-secondary mt-4 side-btn'><i class="bi bi-telephone me-2"></i>  Manage Contact</button>
        <br />

        <button className='btn btn-secondary mt-4 side-btn'><i class="bi bi-pencil-square me-2"></i>  Manage Feedback</button>
        <br />
      </Container>
    </div>
  )
}
