import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            {/* Header */}
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        <i className="ri-book-3-line" /> ReadRealm
                    </a>
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link active-link">
                                    <i className="ri-home-line" />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/featured" className="nav__link">
                                    <i className="ri-book-3-line" />
                                    <span>Featured</span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/discount" className="nav__link">
                                    <i className="ri-price-tag-3-line" />
                                    <span>Discount</span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/new-book" className="nav__link">
                                    <i className="ri-bookmark-line" />
                                    <span>New Books</span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/testimonial" className="nav__link">
                                    <i className="ri-message-3-line" />
                                    <span>Testimonial</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__actions">
                        {/* User Button */}
                        <Link to="/log-in">
                            <i className="ri-user-line login-button" id="login-button" />
                        </Link>
                        {/* Theme Button */}
                        <Link to="/search">
                            <i className="ri-search-line change-theme" id="theme-button" />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
