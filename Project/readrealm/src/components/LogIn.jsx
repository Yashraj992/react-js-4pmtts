import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import FlashMessage from 'react-flash-message'      

export default function LogIn() {
    const [data,setData]=useState({
        email:"",
        password:""
    });


    const [errors, setErrors] = useState("");
    const validate = () => {
        const errors = {}
        if(!data.email){
            errors.email="Please enter your email..."
        }
        if(!data.password){
            errors.password="Please enter your password..."
        }
        return errors;
    }

    const logInChange = (e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const [flash, setFlash] = useState(false);

    const logInSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if(Object.keys(errors).length===0){
            setFlash(true);
            redirect('/');
        }
        else{
            setErrors(errors);
        }
    }
    return (
        <>
            <div className="login">
                <form action="" className="login__form grid" onSubmit={logInSubmit}>
                    <h3 className="login__title">Log In</h3>
                    {flash && (<FlashMessage duration="4000">
                        <div className='alert alert-success'>
                            <p>You LogIn successfully!</p>
                        </div>
                    </FlashMessage>)}
                    <div className="login__group grid">
                        <div>
                            <label htmlFor="login-email" className="login__label">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                value={data.email}
                                onChange={logInChange}
                                placeholder="Write your email"
                                id="login-email"
                                className="login__input"
                            />
                            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="login-pass" className="login__label">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                value={data.password}
                                onChange={logInChange}
                                placeholder="Write your password"
                                id="login-pass"
                                className="login__input"
                            />
                            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                        </div>
                    </div>
                    <div>
                        <span className="login__signup">
                            Don't have an account? <Link to="/sign-up">Sign up</Link>
                        </span>
                        <input type="submit" value="Log In" className="login__button button" />
                    </div>
                </form>
                <Link to="/">
                    <i className="ri-close-line signup__close" id="signup-close" />
                </Link>
            </div>
        </>
    )
}
