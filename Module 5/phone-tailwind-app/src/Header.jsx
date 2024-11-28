import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg flex shadow p-3">
                <Navbar.Brand className='ms-44 logo'>
                    <span className='bi bi-bag-check-fill text-2xl me-2 logo-icon'></span>
                    <span className='text-2xl font-medium logo'>Multimart</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto text-xl gap-x-20 ms-56 nav-ul">
                        <Nav.Item>
                            <Link to={"/"} className='font-semibold'>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/shop"} className='font-semibold'>Shop</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/cart"} className='font-semibold'>Cart</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/login"}><span className='bi bi-person-fill'></span></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/cart"}><span className='bi bi-cart-fill'></span></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
