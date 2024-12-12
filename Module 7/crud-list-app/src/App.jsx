import React, { useRef, useState, useEffect } from 'react'
// import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import img1 from './assets/images/man.AVIF'

export default function App() {
  const [add, setAdd] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:4000/AddEmployee`).then((response) => {
      setAdd(response.data);
    })
  }, [add])

  // stored
  const name = useRef("");
  const firstname = useRef("");
  const lastname = useRef("");
  const address = useRef("");
  const age = useRef("");
  // const navigate = useNavigate();
  const navigate = useNavigate();

  // AddFunction
  const addName = (e) => {
    e.preventDefault();
    var data = {
      name: name.current.value,
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      address: address.current.value,
      age: age.current.value
    }

    axios.post(`http://localhost:4000/AddEmployee`, data).then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Your task successfully added!",
        icon: "success"
      });

      //   navigate('/');

      // clear the values
      e.target.reset();
    })
  }

  return (
    <>
      <div className="container p-5 mt-5 mx-auto shadow">
        <h2 className="text-white bg-primary p-3">
          Employee Management systems{" "}
          <button
            type="button"
            className="btn btn-md btn-outline-light text-white float-end"
            data-bs-toggle="modal"
            data-bs-target="#addemp"
          >
            Add Employee <span className="bi bi-person-add" />
          </button>
        </h2>
        <hr className="border border-1 border-primary" />
        <div className="row">
          <div className="col-md-4">
            <img src={img1} className="img-fluid man" />
          </div>
          <div className="col-md-8">
            <table className="table table-responsive table-bordered table-stripped table-hover">
              <thead>
                <tr className="bg-primary text-white text-center">
                  <th>#id</th>
                  <th>Name</th>
                  <th>FName</th>
                  <th>LName</th>
                  <th>Address</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {add && add.map((item) => {
                  return (
                    <>
                      <tr className="text-center">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.address}</td>
                        <td>{item.age}</td>
                        <td>

                          <button type='button' className='bi bi-trash fs-3 border border-0 bg-white text-primary' onClick={() => { navigate(`/delete-data/${item.id}`) }}></button>
                          |{" "}
                          <button type='button' className='bi bi-pencil fs-3 border border-0 bg-white text-primary' onClick={() => { navigate(`/edit-data/${item.id}`) }}></button>
                        </td>
                      </tr>
                    </>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* create a employee add form */}
      <div className="modal fade" id="addemp" role="dialog">
        <div className="modal-dialog" style={{ maxWidth: "70%", marginTop: "6%" }}>
          <div className="modal-content">
            <div className="row">
              <div className="col-md-6 bg-primary p-5">
                <h1 className="text-white">
                  Add Employee <span className="bi bi-person-add" />
                </h1>
                <p className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6818/6818210.png"
                    alt="person"
                    className="img-fluid"
                  />
                </p>
              </div>
              <div className="col-md-6 p-5 mt-5">
                <h6 className="float-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger text-white"
                    data-bs-dismiss="modal"
                  >
                    ×
                  </button>
                </h6>
                <div className="form-group mt-3" >
                  <input
                    type="text"
                    ref={name}
                    placeholder="Name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <input
                      type="text"
                      ref={firstname}
                      placeholder="Firtname"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <input
                      type="text"
                      ref={lastname}
                      placeholder="Lastname"
                      required
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    placeholder="Address"
                    ref={address}
                    required
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    ref={age}
                    placeholder="Age"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    onClick={addName}
                    required=""
                    className="btn btn-md btn-primary text-white"
                    defaultValue="AddEmployee"
                  />
                  <input
                    type="reset"
                    required=""
                    className="btn btn-md btn-danger text-white"
                    defaultValue="Reset"
                  />
                </div>
                <div className="form-group mt-3">
                  <b>
                    Already have an account ?{" "}
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginemp">
                      Login here
                    </a>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* create a employee login form */}
      <div className="modal fade" id="loginemp" role="dialog">
        <div className="modal-dialog" style={{ maxWidth: "70%", marginTop: "6%" }}>
          <div className="modal-content">
            <div className="row">
              <div className="col-md-6 bg-primary p-5">
                <h1 className="text-white">
                  Login as Employee <span className="bi bi-person-add" />
                </h1>
                <p className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6818/6818210.png"
                    alt="person"
                    className="img-fluid w-75"
                  />
                </p>
              </div>
              <div className="col-md-6 p-5 mt-5">
                <h6 className="float-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger text-white"
                    data-bs-dismiss="modal"
                  >
                    ×
                  </button>
                </h6>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    placeholder="Email *"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    placeholder="Password *"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    required=""
                    className="btn btn-md btn-primary text-white"
                    defaultValue="Login"
                  />
                  <b>
                    <a href="#">Forget password ?</a>
                  </b>
                </div>
                <div className="form-group mt-3">
                  <b>
                    Do'nt have an account ?{" "}
                    <a href="#" data-bs-toggle="modal" data-bs-target="#addemp">
                      Create Account
                    </a>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
