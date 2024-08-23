import React from "react";
import { MDBContainer,MDBIcon } from "mdb-react-ui-kit";

function Header(){
    return(
        <>
        <MDBContainer fluid className="d-flex justify-content-between mt-2">
                <ul className="d1 d-flex ms-5">
                    <li><a href="" className="ms-5">About Us</a></li>
                    <li><a href="" className="ms-5">Privacy</a></li>
                    <li><a href="" className="ms-5">FAQ</a></li>
                    <li><a href="" className="ms-5">Careers</a></li>
                </ul>

                    <ul className="d2 d-flex ms-5">
                    <li><a href="" className="ms-5">My Wishlist</a></li>
                    <li><a href="" className="ms-5">Track Your Order</a></li>
                    </ul>

                <div className="me-5">
                <MDBIcon fab icon="facebook" className="icon ms-5" />
                <MDBIcon fab icon="instagram"  className="icon ms-3"/>
                <MDBIcon fab icon="twitter" className="icon ms-3"/>
                <MDBIcon fab icon="linkedin" className="icon ms-3"/>
                <MDBIcon fab icon="youtube" className="icon ms-3"/>
                </div>
        </MDBContainer>
        <hr className="hr1"/>
        </>
    )
}
export default Header