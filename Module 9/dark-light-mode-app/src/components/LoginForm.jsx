import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import FlashMessage from 'react-flash-message';

const LoginForm = () => {
    const { theme } = useContext(ThemeContext);

    const [flash,setFlash]=useState(false);

    const formStyle = {
        backgroundColor: theme === 'light' ? '#fff' : '#2c2c2c',
        color: theme === 'light' ? '#000' : '#fff',
        margin: 'auto',
    };

    const name = useRef("");
    const password = useRef("");

    const updateForm =(e)=>{
        e.preventDefault();
        var insert={
            name:name.current.value,
            password:password.current.value
        }
        console.log(insert);
        setFlash(true);
        e.target.reset();
    }

    return (
        <div style={formStyle} className='p-5 shadow border rounded w-50'>
            <h2>Log in</h2>
            {flash && <FlashMessage>
                <div className='alert alert-success'>
                    <p>Form submit successfully!</p>
                </div>
                </FlashMessage>}
            <hr />
            <form onSubmit={updateForm}>
                <div className='form-group'>
                    <label className='form-label'>Email</label>
                    <input type="email" ref={name} className='form-control' placeholder='Enter your email...' required/>
                </div>
                <div className='form-group mt-4'>
                    <label className='form-label'>Password</label>
                    <input type="password" ref={password} className='form-control' placeholder='Enter your Password...' required/>
                </div>
                <button className='btn btn-primary text-white w-100 mt-4 p-2'>Log in</button>
            </form>
            <p className='text-center mt-2'>OR</p>
            <button  className='btn btn-success text-white w-100 p-2'>Create Account</button>
        </div>
    );
};

export default LoginForm;
