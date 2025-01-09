import React, { useRef, useState } from 'react'
import testimonial1 from '../assets/img/testimonial-perfil-1.png'
import testimonial2 from '../assets/img/testimonial-perfil-2.png'
import testimonial3 from '../assets/img/testimonial-perfil-3.png'
import Header from './Header'
import FlashMessage from 'react-flash-message'
import Footer from './Footer'

export default function Testimonial() {
    const customername = useRef("");
    const customeremail = useRef("");
    const customerphone = useRef("");
    const customerfeedback = useRef("");

    const [flash, setFlash] = useState(false);

    const feedbackSubmit = (e) => {
        e.preventDefault();
        var feed = {
            customername: customername.current.value,
            customeremail: customeremail.current.value,
            customerphone: customerphone.current.value,
            customerfeedback: customerfeedback.current.value
        }
        setFlash(true);
        console.log(feed);
        e.target.reset();
    }
    return (
        <>
            <Header />

            {/* Feedback Form */}
            <div className="login" style={{ marginTop: "50px" }}>
                <form action="" className="login__form grid" onSubmit={feedbackSubmit}>
                    <h3 className="login__title">Feedback</h3>
                    {flash && (<FlashMessage duration="4000">
                        <div className='alert alert-success'>
                            <p>Your Feedback submit successfully!</p>
                        </div>
                    </FlashMessage>)}
                    <div className="login__group grid">
                        <div>
                            <label htmlFor="login-email" className="login__label">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                ref={customername}
                                placeholder="Write your Name..."
                                id="login-email"
                                className="login__input"
                            />
                        </div>
                        <div>
                            <label htmlFor="login-email" className="login__label">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                ref={customeremail}
                                placeholder="Write your email"
                                id="login-email"
                                className="login__input"
                            />
                        </div>
                        <div>
                            <label htmlFor="login-email" className="login__label">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name='phone'
                                ref={customerphone}
                                placeholder="Write your phone-number..."
                                id="login-email"
                                className="login__input"
                            />
                        </div>
                        <div>
                            <label htmlFor="login-pass" className="login__label">
                                Feedback
                            </label>
                            <input
                                type="text"
                                name='feedback'
                                ref={customerfeedback}
                                placeholder="Write your feedback..."
                                id="login-pass"
                                className="login__input"
                            />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="login__button button" />
                    </div>
                </form>
            </div>

            {/* Customer Options  */}
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

            <Footer />
        </>
    )
}
