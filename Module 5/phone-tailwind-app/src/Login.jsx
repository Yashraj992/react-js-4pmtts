import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Login() {
    return (
        <>
            <Header />
            <div className='login container w-1/3 mt-20 bg-slate-900 rounded-xl' style={{ height: "400px" }}>

                <h1 className='text-center text-white p-4 text-3xl font-semibold'>Log In</h1>
                <form action="" className='p-6'>
                    <input type="text" placeholder='Email & Phone Number...' className='form-control bg-slate-200 placeholder-black' />
                    <input type="password" className='form-control mt-4 bg-slate-200 placeholder-black' />
                    <Link to={"/"}><input type="button" value="Login" className='form-control mt-16 bg-white w-28 mx-auto text-lg text-slate-950' /></Link>
                </form>
                <p className='text-center text-white'>Don't have an account ? <Link to={"/signin"}>Create an account</Link></p>
            </div>
            <br />
            <br />
            <Footer />
        </>
    )
}
