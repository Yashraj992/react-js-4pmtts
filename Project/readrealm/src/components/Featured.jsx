import Header from './Header'
import book1 from '../assets/img/book-1.png'
import book2 from '../assets/img/book-2.png'
import book3 from '../assets/img/book-3.png'
import book4 from '../assets/img/book-4.png'
import book5 from '../assets/img/book-5.png'
import book6 from '../assets/img/book-6.png'
import book7 from '../assets/img/book-7.png'
import book8 from '../assets/img/book-8.png'
import book9 from '../assets/img/book-9.png'
import book10 from '../assets/img/book-10.png'
import book11 from '../assets/img/book-5.png'
import book12 from '../assets/img/discount-book-1.png'
import book13 from '../assets/img/home-book-1.png'
import book14 from '../assets/img/home-book-2.png'
import book15 from '../assets/img/home-book-3.png'
import Footer from './Footer'

export default function Featured() {
    return (
        <>
            <Header />
            <section className="featured section" id="featured">
                <h2 className="section__title">Featured Books</h2>
                <div className="featured__container container">
                    <article className="featured__card">
                        <img
                            alt="image"
                            src={book13}
                            className="featured__img"
                        />
                        <h2 className="featured__title">Diana & Jack</h2>
                        <div className="featured__prices">
                            <span className="featured__discount">$11.99</span>
                            <span className="featured__price">$19.99</span>
                        </div>
                        <button type='button' className="button">Add To Cart</button>
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
                            src={book14}
                            alt="image"
                            className="featured__img"
                        />
                        <h2 className="featured__title">Christmas Has Come</h2>
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
                            src={book15}
                            alt="image"
                            className="featured__img"
                        />
                        <h2 className="featured__title">For The Cate</h2>
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
                            src={book11}
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
                </div>
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
                <div className="featured__container container">
                    <article className="featured__card">
                        <img
                            src={book9}
                            alt="image"
                            className="featured__img"
                        />
                        <h2 className="featured__title">Bird Park</h2>
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
                            src={book10}
                            alt="image"
                            className="featured__img"
                        />
                        <h2 className="featured__title">Memories Of The Sword</h2>
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
                            src={book11}
                            alt="image"
                            className="featured__img"
                        />
                        <h2 className="featured__title">Customize For Clothes</h2>
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
                            src={book12}
                            alt="image"
                            className="featured__img"
                        />
                        <h2 className="featured__title">Ideal For interior</h2>
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
            </section >

            <Footer />
        </>
    )
}
