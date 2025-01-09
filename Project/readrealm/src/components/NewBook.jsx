import React from 'react'
import Header from './Header'
import book6 from '../assets/img/book-6.png'
import book7 from '../assets/img/book-7.png'
import book8 from '../assets/img/book-8.png'
import book9 from '../assets/img/book-9.png'
import book10 from '../assets/img/book-10.png'
import book11 from '../assets/img/book-5.png'
import book1 from '../assets/img/book-1.png'
import book2 from '../assets/img/book-2.png'
import book3 from '../assets/img/book-3.png'
import book4 from '../assets/img/book-4.png'
import book12 from '../assets/img/home-book-1.png'
import book13 from '../assets/img/home-book-2.png'
import Footer from './Footer'


export default function NewBook() {
    return (
        <>
            <Header />

            <section className="new section" id="new">
                <h2 className="section__title">New Books</h2>
                <div className="new__container container">
                    <a href="#" className="new__card">
                        <img
                            src={book6}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Designed For Work</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book7}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Plant Tree For The Future</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book8}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Modern Abstract Poster</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                </div>
                <br />
                <div className="new__container container">
                    <a href="#" className="new__card">
                        <img
                            src={book9}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Bird Park</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book10}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Memories Of The Work</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book11}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Customized Your Autumn Clothes</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                </div>
                <br />
                <div className="new__container container">
                    <a href="#" className="new__card">
                        <img
                            src={book1}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">The Lord Of The Kings</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book2}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Simple & Minimalist</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book3}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Muted Poster</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                </div>
                <br />
                <div className="new__container container">
                    <a href="#" className="new__card">
                        <img
                            src={book4}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Pouring Dreams</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book12}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Diana & Jack</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                    <a href="#" className="new__card">
                        <img
                            src={book13}
                            alt="image"
                            className="new__img"
                        />
                        <div>
                            <h2 className="new__title">Christmas Has Come</h2>
                            <div className="new__prices">
                                <span className="new__discount">$7.99</span>
                                <span className="new__price">$14.99</span>
                            </div>
                            <div className="new__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                            <br />
                            <button className="newbook-button">Add To Cart</button>
                        </div>
                    </a>
                </div>
            </section>

            <Footer />
        </>
    )
}
