import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Signin() {
    return (
        <>
            <Header />
            <div className='login container w-1/3 mt-20 bg-slate-900 rounded-xl' style={{ height: "400px" }}>

                <h1 className='text-center text-white p-2 text-3xl font-semibold'>Sign In</h1>
                <form action="" className='p-6'>
                    <input type="text" placeholder='Email Address...' className='form-control mt-3 bg-slate-200 placeholder-black' />
                    <input type="text" placeholder='Phone Number...' className='form-control mt-3 bg-slate-200 placeholder-black' />
                    <input type="text" placeholder='Password...' className='form-control mt-3 bg-slate-200 placeholder-black' />
                    <Link to={"/"}><input type="button" value="Signin" className='form-control mt-11 bg-white w-28 mx-auto text-lg text-slate-950' /></Link>
                </form>
                <p className='text-center text-white'>Already have an account ? <Link to={"/login"}>log in</Link></p>
            </div>
            <br />
            <br />
            <Footer />
        </>
    )
}
