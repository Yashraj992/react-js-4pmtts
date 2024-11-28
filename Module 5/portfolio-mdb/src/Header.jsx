import React from 'react'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem } from 'mdb-react-ui-kit'

export default function Header() {
  return (
    <>
    <MDBNavbar className='nav navbar navbar-expand p-3'>
        <MDBNavbarBrand className='ms-5 px-5'>
            <h4 className='ms-5 px-5'>YASHRAJSINH</h4>
        </MDBNavbarBrand>

        <MDBNavbarNav className='px-5 ms-5'>
            <MDBNavbarItem className='nav-ul ms-5 px-5'>
                <li><a href="" className='text-black fs-5'>Home</a></li>
                <li><a href="" className='text-black fs-5 ms-5'>About</a></li>
                <li><a href="" className='text-black fs-5 ms-5'>Education</a></li>
                <li><a href="" className='text-black fs-5 ms-5'>Projects</a></li>
                <li><a href="" className='text-black fs-5 ms-5'>Contact</a></li>
            </MDBNavbarItem>
        </MDBNavbarNav>
    </MDBNavbar>
    </>
  )
}
