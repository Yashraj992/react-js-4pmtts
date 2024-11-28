import React from 'react'
import { Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './assets/image/main-logo.png'
import welcome from './assets/image/welcome.gif'
import login from './assets/image/login.webp'
import gif from './assets/image/gif.webp'

export default function Navbar() {
    return (
        <div>
            <Nav className='nav navbar shadow'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className='mt-2'>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about-us"}>About Us</Link></li>
                    <li><Link to={"/shop"}>Shop</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                </ul>
                <div className="icons">
                    <i className="bi bi-search fs-5" data-bs-toggle="modal" data-bs-target="#searchModal"></i>

                    {/* Search Modal */}
                    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <input type="text" className='form-control' placeholder='Search' />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn text-white" style={{ backgroundColor: "#704204" }}>Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <i className="bi bi-person-fill ms-3 fs-5" data-bs-toggle="modal" data-bs-target="#loginModal"></i>

                    {/* LogIn Modal */}
                    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                        <div class="modal-dialog" >
                            <div class="modal-content p-5 mt-5" style={{ width: "900px", marginLeft: "-180px" }}>
                                <Row className='w-100'>
                                    <div className="col-md-6">
                                        <img src={welcome} alt="" className='img-fluid h-100 rounded' />
                                    </div>

                                    <div className="col-md-6">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Sign In</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <label htmlFor="" className='form-label'>Email Address :</label>
                                            <input type="text" className='form-control' placeholder='Enter your email....' />
                                            <br />

                                            <label htmlFor="" className='form-label'>Phone Number :</label>
                                            <input type="text" className='form-control' placeholder='Enter your phone Number....' />
                                            <br />

                                            <label htmlFor="" className='form-label'>Password :</label>
                                            <input type="text" className='form-control' placeholder='Enter your password...' />
                                        </div>

                                            <button type="button" class="btn text-white" style={{ backgroundColor: "#704204" }}>Sign In</button>
                                            <p>Already have an account? <Link data-bs-toggle="modal" data-bs-target="#signinModal" className='text-black text-decoration-none'>Log In</Link></p>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>


                    {/* SignIn Modal */}
                    <div class="modal fade" id="signinModal" tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
                        <div class="modal-dialog" >
                            <div class="modal-content p-5 mt-5" style={{ width: "800px", marginLeft: "-180px" }}>
                                <Row>

                                    <div className="col-md-7">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-3" id="exampleModalLabel">Log In</h1>
                                        </div>

                                            <img src={gif} alt="" className='img-fluid rounded'/>
                                            <br /><br />

                                            <label htmlFor="" className='form-label'>Username :</label>
                                            <input type="text" className='form-control' placeholder='Enter your username....' />
                                            <br />

                                            <label htmlFor="" className='form-label'>Password :</label>
                                            <input type="text" className='form-control' placeholder='Enter your password...' />
                                            <br /><br />

                                            <button type="button" class="btn text-white px-4 py-2" style={{ backgroundColor: "#704204" }}>Log In</button>
                                    </div>

                                    <div className="col-md-5" style={{height:"550px"}}>
                                        <img src={login} alt="" className='img-fluid rounded h-100 w-100'/>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{position:"absolute",marginLeft:"10px",marginTop:"-30px"}}></button>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <Link to={"/icon-cart"}><i className="bi bi-cart-fill ms-3 fs-5 text-black"></i></Link>
                </div>


            </Nav>
        </div>
    )
}
