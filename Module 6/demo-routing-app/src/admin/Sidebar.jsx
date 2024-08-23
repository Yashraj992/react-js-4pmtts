import React from 'react'
import { Container } from 'react-bootstrap'

export default function Sidebar() {
  return (
    <div>
      <Container fluid className='shadow p-4' style={{height:"650px"}}>
        <button className='btn btn-secondary mt-4 fs-5 side-btn'><i class="bi bi-window me-2"></i>  Dashboard</button>
        <br />

        <button className='btn btn-secondary mt-4 fs-5 side-btn'><i class="bi bi-person me-2"></i>  Manage Employee</button>
        <br />

        <button className='btn btn-secondary mt-4 fs-5 side-btn'><i class="bi bi-clipboard2-minus me-2"></i>  Add Leaves</button>
        <br />

        <button className='btn btn-secondary mt-4 fs-5 side-btn'><i class="bi bi-clipboard2-plus me-2"></i>  Add Attendance</button>
        <br />

        <button className='btn btn-secondary mt-4 fs-5 side-btn'><i class="bi bi-patch-question me-2"></i>  Add FAQ</button>
        <br />

        <button className='btn btn-secondary mt-4 fs-5 side-btn'><i class="bi bi-telephone me-2"></i>  Manage Contact</button>
        <br />

        <button className='btn btn-secondary mt-4 fs-5 side-btn'><i class="bi bi-pencil-square me-2"></i>  Manage Feedback</button>
        <br />
      </Container>
    </div>
  )
}
