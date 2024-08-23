import React from 'react'
import logo from '../../assets/images/logo.png'

export default function Login() {
    return (
        <>
            <div className='tops-hrms'>
                <p className="text-center mt-5">
                    <img src={logo} className="img-fluid w-25 mx-auto" />
                </p>
                <div className="container p-5 mt-5 mx-auto bg-white hrms-login">
                    <div className="form-group mt-3">
                        <input type="text" placeholder="Email *" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="password"
                            placeholder="Password *"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="submit"
                            defaultValue="SignIn"
                            className="btn btn-md btn-primary w-100"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}
