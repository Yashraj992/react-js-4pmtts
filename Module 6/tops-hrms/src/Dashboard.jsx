import React from 'react'
import brijesh from './assets/images/brijesh.png'
import logo from './assets/images/logo-header.png'

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid shadow">
                <div className="row">
                    <div className="col-9">
                        <img src={logo} className="img-fluid" />
                    </div>
                    <div className="col-3 brijesh-img">
                        <strong>
                            <img src={brijesh} className="img-fluid rounded-circle" />
                            &nbsp;Brijesh
                        </strong>
                    </div>
                </div>
            </div>
            {/* tops navbar */}
            <nav className="nav navbar navbar-expand-md bg-dark">
                <a href="" className="navbar-brand ms-5 text-white">
                    Tops Hrms Dashboard
                </a>
                {/* button */}
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#coll"
                >
                    <span className="bi bi-grid text-white fs-2" />
                </button>
                <div className="collapse navbar-collapse" id="coll">
                    <ul className="navbar-link">
                        <li>
                            <a href="#">
                                <span className="bi bi-house" />
                                &nbsp; Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">My Request</a>
                        </li>
                        <li>
                            <a href="#">Report</a>
                        </li>
                        <li>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#help">
                                <span className="bi bi-question-circle" />
                                &nbsp; Help
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* tops content */}
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-md-5 ms-5 mt-4">
                        <div className="card border border-1 border-danger">
                            <div className="card-header bg-danger text-white">
                                <h5>
                                    <span className="bi bi-calendar" /> My Monthly Attendance
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-7">
                                        <img
                                            src="https://i.pinimg.com/736x/7f/25/52/7f255299ff6e9aa169467518e5001ab9.jpg"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <table className="table table-responsive">
                                            <tbody>
                                                <tr align="center">
                                                    <th colSpan={2}>Punch History</th>
                                                </tr>
                                                <tr>
                                                    <th>PunchDate</th>
                                                    <th>PunchTime</th>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ms-5 mt-4">
                        <div className="card border border-1 border-warning">
                            <div className="card-header bg-warning text-white">
                                <h5>
                                    <span className="bi bi-calendar" /> My Monthly Attendance
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-7">
                                        <img
                                            src="https://i.pinimg.com/736x/7f/25/52/7f255299ff6e9aa169467518e5001ab9.jpg"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <table className="table table-responsive">
                                            <tbody>
                                                <tr align="center">
                                                    <th colSpan={2}>Punch History</th>
                                                </tr>
                                                <tr>
                                                    <th>PunchDate</th>
                                                    <th>PunchTime</th>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ms-5 mt-4">
                        <div className="card border border-1 border-success">
                            <div className="card-header bg-success text-white">
                                <h5>
                                    <span className="bi bi-calendar" /> My Monthly Attendance
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-7">
                                        <img
                                            src="https://i.pinimg.com/736x/7f/25/52/7f255299ff6e9aa169467518e5001ab9.jpg"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <table className="table table-responsive">
                                            <tbody>
                                                <tr align="center">
                                                    <th colSpan={2}>Punch History</th>
                                                </tr>
                                                <tr>
                                                    <th>PunchDate</th>
                                                    <th>PunchTime</th>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ms-5 mt-4">
                        <div className="card border border-1 border-primary">
                            <div className="card-header bg-primary text-white">
                                <h5>
                                    <span className="bi bi-calendar" /> My Monthly Attendance
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-7">
                                        <img
                                            src="https://i.pinimg.com/736x/7f/25/52/7f255299ff6e9aa169467518e5001ab9.jpg"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <table className="table table-responsive">
                                            <tbody>
                                                <tr align="center">
                                                    <th colSpan={2}>Punch History</th>
                                                </tr>
                                                <tr>
                                                    <th>PunchDate</th>
                                                    <th>PunchTime</th>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                                <tr>
                                                    <td>28/05/2024</td>
                                                    <td>17:31:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays &nbsp;{" "}
                                    <span className="bi bi-emoji-smile text-success fs-5" />
                                    &nbsp;Holidays
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tops footer */}
            <div className="container-fluid p-1 bg-dark text-white mt-5">
                <p className="text-center">2016 © TOPS Technologies.</p>
            </div>
            {/* help modal display here */}
            <div className="modal fade" id="help" role="dialog">
                <div className="modal-dialog" style={{ minWidth: "55%", marginTop: "5%" }}>
                    <div className="modal-content p-5">
                        <div className="row">
                            <div className="col-md-5">
                                <img
                                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-md-7 mt-5 p-4">
                                <h4>
                                    For Any Help ?{" "}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger text-white float-end"
                                        data-bs-dismiss="modal"
                                    >
                                        ×
                                    </button>
                                </h4>
                                <hr className="border border-1 border-dark w-50" />
                                <h5>Call Us On : (+91)-9998003879</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
