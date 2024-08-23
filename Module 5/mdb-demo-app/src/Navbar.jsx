import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarLink, MDBNavbarItem, MDBIcon } from "mdb-react-ui-kit";

function Navbar() {
    return (
        <>
            <MDBNavbar fluid className=" p-1 justify-content-between">
                <MDBNavbarBrand className="ms-5">
                    <img className="ms-5" src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp" alt="" />
                </MDBNavbarBrand>

                <MDBNavbarLink className= "d-flex fs-5 me-5 nav-ul">
                    <li><a href="" className="ms-5">Home</a></li>
                    <li><a href="" className="ms-5">Men</a></li>
                    <li><a href="" className="ms-5">Women</a></li>
                    <li><a href="" className="ms-5">Baby Collection</a></li>
                    <li><a href="" className="ms-5">Pages</a></li>
                    <li><a href="" className="ms-5">Blog</a></li>
                    <li><a href="" className="ms-5">Contact</a></li>
                </MDBNavbarLink>

                <MDBNavbarItem className="me-5">
                <MDBIcon fas icon="search" className="fs-3 ms-3 nav-icon"/>
                <MDBIcon far icon="user" className="fs-3 ms-3 nav-icon"/>
                <MDBIcon fas icon="shopping-cart" className="fs-3 ms-3 nav-icon"/>
                </MDBNavbarItem>
            </MDBNavbar>
        </>
    )
}
export default Navbar