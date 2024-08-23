import React from 'react'

export default function Foooter() {
    return (
        <div>
            <div className="footer mt-5">
                <h3 className='text-center text-white' style={{paddingTop:"80px", letterSpacing:"5px"}}>Stay in Touch</h3>
                <hr className='mx-auto w-25 text-white'/>

                <form action="" className='input-group mx-auto mt-4' style={{width:"450px"}}>
                    <input type="text" className='form-control p-3' placeholder='Enter Your Email Address'/>
                    <button type='button' className='btn btn-warning p-3'>Submit</button>
                </form>
            </div>
        </div>
    )
}
