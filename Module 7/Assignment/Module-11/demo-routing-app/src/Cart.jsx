import React from 'react'
import Navbar from './Navbar'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cart1 from './assets/image/cart-1.jpg'
import cart2 from './assets/image/cart-2.jpg'
import Footer from './Foooter'

export default function Cart() {
    return (
        <div>
            <Navbar />

            <Container className='mt-5 cart'>
                <p style={{ fontSize: "50px", letterSpacing: "5px" }}>Cart</p>
                <p><Link to={"/"}>Home</Link>/ <Link to={"/shop"}>Shop</Link>  / Shop-Grid</p>


                <Row className='mt-5'>
                    <div className="col-md-8">
                        <table className='table'>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>

                            <br />
                            <tr className='border border-2'></tr>
                            <tr>
                                <td className='d-flex mt-5'>
                                    <img src={cart1} alt="" className='img-fluid' />
                                    <div className="cart-data">
                                        <b>Gold Earnings</b>
                                        <p>$200.00</p>
                                    </div>
                                </td>
                                <td>
                                    <select className='form-control w-25 border border-3'>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                    </select>
                                </td>
                                <td>
                                    $200.00
                                </td>
                                <td>
                                <i class="bi bi-x-circle-fill fs-5"></i>
                                </td>
                            </tr>

                            <br />
                            <tr className='border border-2'></tr>

                            <tr>
                                <td className='d-flex mt-5'>
                                    <img src={cart2} alt="" className='img-fluid' />
                                    <div className="cart-data">
                                        <b>Silver Chain</b>
                                        <p>$210.00</p>
                                    </div>
                                </td>
                                <td>
                                    <select className='form-control w-25 border border-3'>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                    </select>
                                </td>
                                <td>
                                    $200.00
                                </td>
                                <td>
                                <i class="bi bi-x-circle-fill fs-5"></i>
                                </td>
                            </tr>

                            <br />
                            <tr className='border border-2'></tr>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <p className='fs-3'>Card Total</p>
                        <hr />
                        <b>Subtotal</b> <span className='ms-5' style={{paddingLeft:"222px"}}> $410.00</span>
                        <hr />
                        <b>Total</b> <span className='ms-5' style={{paddingLeft:"250px"}}>$410.00</span>
                        <hr />

                        <br />
                        <span>
                        <button className='btn btn-dark px-5'>update Cart</button>
                        <button className='btn btn-dark px-4 ms-5'>Continue Shopping</button>
                        </span>
                        <br /> <br />
                        <button className='btn btn-warning w-100 cart-btn'>Proceed To Checkout</button>
                    </div>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}
