import React from 'react'

export default function AdminLayout() {
  return (
      <>
    <div className='dashboard'>
  <div className="container-fluid p-3 admin-header">
    <div className="row">
      <div className="col-md-7">
        <h3 className="text-white ">SRMS Admin</h3>
      </div>
      <div className="col-md-5">
        <h6>
          <span className="bi bi-person text-white" /> welcome admin
          &nbsp;&nbsp;&nbsp; <span className="bi bi-calendar" /> &nbsp; Tuesday
          June 2024 &nbsp;&nbsp;&nbsp;{" "}
          <span className="bi bi-power text-danger" />
          &nbsp; Logout
        </h6>
      </div>
    </div>
  </div>
  <div className="admin-bottom-header shadow p-3">
    <div className="row">
      <div className="col-md-4">
        <h6>
          <a href="dashboard.html">
            <span className="ms-5 bi bi-speedometer" /> &nbsp;Dashboard
          </a>
        </h6>
      </div>
      <div className="col-md-8">
        <input
          type="text"
          placeholder="search here anything....."
          className="form-control ms-0 w-75"
        />
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      {/* sidebar */}
      <div className="col-md-3 admin-sidebar p-5">
        <ul className="sidebar-link">
          <li>
            <a href="manageemployee.html">
              <span className="bi bi-person" /> Manage Employee
            </a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">
              <span className="bi bi-calendar" />
              Add Leaves
            </a>
            <ul
              className="dropdown-menu bg-white text-dark p-2"
              style={{ maxWidth: "250px !important" }}
            >
              <li>
                <a href="addleaves.html" className="text-dark">
                  AddLeaves <span className="bi bi-calendar" />
                </a>
              </li>
              <li>
                <a href="manageleaves.html" className="text-dark">
                  ManageLeaves <span className="bi bi-calendar" />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="addattendance.html">
              <span className="bi bi-calendar" />
              Add Attendance
            </a>
          </li>
          <li>
            <a href="addfaq.html">
              <span className="bi bi-help" />
              Add FAQ
            </a>
          </li>
          <li>
            <a href="managecontacts.html">
              <span className="bi bi-book" />
              Manage Contacts
            </a>
          </li>
          <li>
            <a href="managefeedback.html">
              <span className="bi bi-comment" />
              Manage Feedback
            </a>
          </li>
        </ul>
      </div>
      {/* dashboard */}
      <div className="col-md-9 admin-dashboard">
        <div className="container p-5">
          <div className="row">
            <h3 className="ms-4">Welcome to Admin Dashboard</h3>
            <div className="col-md-3 ms-5 bg-danger p-4 mt-4">
              <h4 className="text-white">Total Employee</h4>
              <h2 className="text-center">
                <span className="badge badge-lg bg-white text-dark">10</span>
              </h2>
            </div>
            <div className="col-md-3 ms-5 bg-primary p-4 mt-4">
              <h4 className="text-white">Total Contacts</h4>
              <h2 className="text-center">
                <span className="badge badge-lg bg-white text-dark">10</span>
              </h2>
            </div>
            <div className="col-md-3 ms-5 bg-success p-4 mt-4">
              <h4 className="text-white">Total Feedback</h4>
              <h2 className="text-center">
                <span className="badge badge-lg bg-white text-dark">10</span>
              </h2>
            </div>
          </div>
          {/* graph */}
          <h3 className="ms-4 mt-5">Manage data</h3>
          <div id="chart_div" />
        </div>
      </div>
    </div>
  </div>
    </div>
</>

  )
}
