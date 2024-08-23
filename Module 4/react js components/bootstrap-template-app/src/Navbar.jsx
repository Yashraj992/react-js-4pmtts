import React from "react";
import { Container, Nav } from "react-bootstrap";
import img1 from './assets/image/logo.png.webp'

function Navbar() {
  return (
    <>
      <Nav className="Container-fluid navbar bg-info d-flex">
                    <a className="navbar-brand" href="#">
                        <img src={img1} alt="logo" className="ms-5 mt-2" />
                    </a>
                     <div className="collapse navbar-collapse d-flex">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </li>
                    </div>
            </Nav>

      {/* <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid d-flex">
          <a className="navbar-brand ms-5" href="#">
            <img src={img1} alt="" />
          </a>
          <div className="collapse navbar-collapse fs-5 ms-5 d-flex justify-content-evenly" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-between">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default Navbar