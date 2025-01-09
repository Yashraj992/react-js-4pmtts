import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import discount1 from '../assets/img/discount-book-1.png'
import discount2 from '../assets/img/discount-book-2.png'
import book1 from '../assets/img/book-1.png'
import book2 from '../assets/img/book-2.png'
import book3 from '../assets/img/book-3.png'
import book4 from '../assets/img/book-4.png'
import book5 from '../assets/img/book-5.png'
import book6 from '../assets/img/book-6.png'
import book7 from '../assets/img/book-7.png'
import book8 from '../assets/img/book-8.png'
import Footer from './Footer'

export default function Discount() {
    return (
        <>
            <Header />

            <section className="discount section" id="discount" style={{ marginTop: "100px" }}>
                <div className="discount__container container grid">
                    <div className="discount__data">
                        <h2 className="discount__title section__title">Up To 50% Discount</h2>
                        <p className="discount__description">
                            Take advantage of the discount days we have for you, buy books from
                            your favourite writers, the more you buy, the more discounts we have
                            for you.
                        </p>
                        <Link to="/discount" className="button">
                            Explore Discount Book
                        </Link>
                    </div>
                    <div className="discount__images">
                        <img
                            src={discount1}
                            alt="image"
                            className="discount__img-1"
                        />
                        <img
                            src={discount2}
                            alt="image"
                            className="discount__img-2"
                        />
                    </div>
                </div>
            </section>

            <h2 className="section__title" style={{marginTop:"70px"}}>Discount Books</h2>
            <div className="featured__container container">
                <article className="featured__card">
                    <img
                        src={book1}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">The Lord of the Kings</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
                <article className="featured__card">
                    <img
                        src={book2}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">Simple & Minimalist</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
                <article className="featured__card">
                    <img
                        src={book3}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">Muted Color</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
                <article className="featured__card">
                    <img
                        src={book4}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">Pouring Dreams</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
            </div>

            <div className="featured__container container">
                <article className="featured__card">
                    <img
                        src={book5}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">Customized Your Autumn Clothes</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
                <article className="featured__card">
                    <img
                        src={book6}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">Designed For Work</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
                <article className="featured__card">
                    <img
                        src={book7}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">Plant Tree For The Future</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
                <article className="featured__card">
                    <img
                        src={book8}
                        alt="image"
                        className="featured__img"
                    />
                    <h2 className="featured__title">Modern Abstract Poster</h2>
                    <div className="featured__prices">
                        <span className="featured__discount">$11.99</span>
                        <span className="featured__price">$19.99</span>
                    </div>
                    <button className="button">Add To Cart</button>
                    <div className="featured__actions">
                        <button>
                            <i className="ri-search-line" />
                        </button>
                        <button>
                            <i className="ri-heart-3-line" />
                        </button>
                        <button>
                            <i className="ri-eye-line" />
                        </button>
                    </div>
                </article>
            </div>

            <Footer />
        </>
    )
}
