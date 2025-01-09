import React from 'react'
import { Link } from 'react-router-dom'
import homebook1 from '../assets/img/home-book-1.png'
import homebook2 from '../assets/img/home-book-2.png'
import homebook3 from '../assets/img/home-book-3.png'
import book1 from '../assets/img/book-1.png'
import book2 from '../assets/img/book-2.png'
import book3 from '../assets/img/book-3.png'
import book4 from '../assets/img/book-4.png'
import discount1 from '../assets/img/discount-book-1.png'
import discount2 from '../assets/img/discount-book-2.png'
import book6 from '../assets/img/book-6.png'
import book7 from '../assets/img/book-7.png'
import book8 from '../assets/img/book-8.png'
import book9 from '../assets/img/book-9.png'
import book10 from '../assets/img/book-10.png'
import book11 from '../assets/img/book-5.png'
import join from '../assets/img/join-bg.jpg'
import testimonial1 from '../assets/img/testimonial-perfil-1.png'
import testimonial2 from '../assets/img/testimonial-perfil-2.png'
import testimonial3 from '../assets/img/testimonial-perfil-3.png'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
    return (
        <>
            <Header />

            {/* MAIN */}
            <div className="main">
                {/* HOME */}
                <section className="home section" id="home">
                    <div className="home__container container grid">
                        <div className="home__data">
                            <h1 className="home__title">
                                Browse &amp; <br />
                                Select E-Books
                            </h1>
                            <p className="home__description">
                                Find the best e-books from your favorite writers, explore hundreds of
                                books with all possible categories, take advantage of the 50% discount
                                and much more.
                            </p>
                            <Link to="/featured" className="button">
                                Explore Now
                            </Link>
                        </div>

                        <div className="home__images">
                            <div className="home-img1">
                                <img src={homebook1} alt="" />
                            </div>
                            <div className="home-img1">
                                <img src={homebook2} alt="" />
                            </div>
                            <div className="home-img1">
                                <img src={homebook3} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="services section">
                    <div className="services__container container grid">
                        <article className="services__card">
                            <i className="ri-truck-line" />
                            <h3 className="services__title">Free Shipping</h3>
                            <p className="services__description">Order More than $100</p>
                        </article>
                        <article className="services__card">
                            <i className="ri-lock-2-line" />
                            <h3 className="services__title">Secure Payment</h3>
                            <p className="services__description">100% Secure Payment</p>
                        </article>
                        <article className="services__card">
                            <i className="ri-customer-service-2-line" />
                            <h3 className="services__title">24/7 Support</h3>
                            <p className="services__description">Call us anytime</p>
                        </article>
                    </div>
                </section>

                {/* FEATURED */}
                <section className="featured section" id="featured">
                    <h2 className="section__title">Featured Books</h2>
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
                    <Link to="/featured" className="button">
                        Shop Now
                    </Link>
                </section>


                {/* DISCOUNT */}
                <section className="discount section" id="discount">
                    <div className="discount__container container grid">
                        <div className="discount__data">
                            <h2 className="discount__title section__title">Up To 50% Discount</h2>
                            <p className="discount__description">
                                Take advantage of the discount days we have for you, buy books from
                                your favourite writers, the more you buy, the more discounts we have
                                for you.
                            </p>
                            <Link to="/discount" className="button">
                                Shop Now
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

                {/* NEW BOOKS */}
                <section className="new section" id="new">
                    <h2 className="section__title">New Books</h2>
                    <div className="new__container container">
                        <Link to="/new-book" className="new__card">
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
                            </div>
                        </Link>
                        <Link to="/new-book" className="new__card">
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
                            </div>
                        </Link>
                        <Link to="/new-book" className="new__card">
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
                            </div>
                        </Link>
                    </div>
                    <br />
                    <div className="new__container container">
                        <Link to="/new-book" className="new__card">
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
                            </div>
                        </Link>
                        <Link to="/new-book" className="new__card">
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
                            </div>
                        </Link>
                        <Link to="/new-book" className="new__card">
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
                            </div>
                        </Link>
                    </div>
                </section>

                {/* JOIN */}
                <section className="join section">
                    <div className="join__container">
                        <img src={join} alt="image" className="join__bg" />
                        <div className="join__data container grid">
                            <h2 className="join__title section__title">
                                Subscribe To Receive <br />
                                The Latest Updates
                            </h2>
                            <form action="" className="join__form">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="join__input"
                                />
                                <button type="submit" className="join__button button">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL */}
                <section className="testimonial section" id="testimonial">
                    <h2 className="section__title">Customer Options</h2>
                    <div className="testimonial__container container">
                        <article className="testimonial__card">
                            <img
                                src={testimonial1}
                                alt="image"
                                className="testimonial__img"
                            />
                            <h2 className="testimonial__title">Susan</h2>
                            <p className="testimonial__description">
                                The best website to buy books, the purchase is very easy to make
                                and has great discounts
                            </p>
                            <div className="testimonial__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                        </article>
                        <article className="testimonial__card">
                            <img
                                src={testimonial2}
                                alt="image"
                                className="testimonial__img"
                            />
                            <h2 className="testimonial__title">James</h2>
                            <p className="testimonial__description">
                                The best website to buy books, the purchase is very easy to make
                                and has great discounts
                            </p>
                            <div className="testimonial__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                        </article>
                        <article className="testimonial__card">
                            <img
                                src={testimonial3}
                                alt="image"
                                className="testimonial__img"
                            />
                            <h2 className="testimonial__title">Emily</h2>
                            <p className="testimonial__description">
                                The best website to buy books, the purchase is very easy to make
                                and has great discounts
                            </p>
                            <div className="testimonial__stars">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                            </div>
                        </article>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}
