import React from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
    return (
        <>
            <div className="search">
                <div className="login">
                    <form action="" className="login__form grid">
                        <h3 className="login__title">Search Books</h3>
                        <div className="login__group grid">
                            <div className='search-button'>
                                <input
                                    type="text"
                                    name='search'
                                    placeholder="Explore Books"
                                    id="login-email"
                                    className="login__input"
                                />
                                <Link to="/new-book">
                                    <button className='button'><span className='ri-search-line'></span></button>
                                </Link>
                            </div>
                        </div>
                        <div>
                        </div>
                    </form>
                    <br />
                    <br />
                    <Link to="/">
                        <i className="ri-close-line signup__close" id="signup-close" />
                    </Link>
                </div>
            </div>
        </>
    )
}
