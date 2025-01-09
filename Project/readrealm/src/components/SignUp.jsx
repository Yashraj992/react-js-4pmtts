import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import FlashMessage from 'react-flash-message'

export default function SignUp() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [flash, setFlash] = useState(false);

    const [errors, setErrors] = useState("");
    const validate = () => {
        const errors = {}
        if (!data.email) {
            errors.email = "Please enter your email..."
        }
        if (!data.password) {
            errors.password = "Please enter your password..."
        }
        return errors;
    }

    const signUpChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const signUpSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setFlash(true);
            redirect('/log-in')
        }
        else {
            setErrors(errors);
        }
    }
    return (
        <>
            <div className="signup">
                <form action="" className="signup__form grid" id='signup-form' onSubmit={signUpSubmit}>
                    <h3 className="signup__title">Sign Up</h3>
                    {flash && (<FlashMessage duration="4000">
                        <div className='alert alert-success'>
                            <p>Account create successfully!</p>
                        </div>
                    </FlashMessage>)}
                    <div className="signup__group grid">
                        <div>
                            <label htmlFor="signup-email" className="signup__label">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Write your email"
                                name='email'
                                value={data.email}
                                id="signup-email"
                                className="signup__input"
                                onChange={signUpChange}
                            />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="signup-pass" className="signup__label">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                value={data.password}
                                placeholder="Write your password"
                                id="signup-pass"
                                className="signup__input"
                                onChange={signUpChange}
                            />
                            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                        </div>
                    </div>
                    <div>
                        <span className="signup__login">
                            Already have an account? <Link to="/log-in">Log In</Link>
                        </span>
                        <button type="submit" className="signup__button button">
                            Sign Up
                        </button>
                    </div>
                </form>
                <Link to="/">
                    <i className="ri-close-line signup__close" id="signup-close" />
                </Link>
            </div>
        </>
    )
}
