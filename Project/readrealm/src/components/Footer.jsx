import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container grid">
                    <div>
                        <a href="#" className="footer__logo">
                            <i className="ri-book-3-line" /> RealRealm
                        </a>
                        <p className="footer__description">
                            Find and explore the best <br />
                            eBooks from all your <br />
                            favorite writers.
                        </p>
                    </div>
                    <div className="footer__data grid">
                        <div>
                            <h3 className="footer__title">About</h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="#" className="footer__link">
                                        Awards
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">
                                        Terms of services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer__title">Company</h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="#" className="footer__link">
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">
                                        Our team
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">
                                        Help center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer__title">Contact</h3>
                            <ul className="footer__links">
                                <li>
                                    <address className="footer__info">
                                        SAYLA <br />
                                        36-34-30, GUJARAT
                                    </address>
                                </li>
                                <li>
                                    <address className="footer__info">
                                        yashrajsinhpm@gmail.com
                                        <br />
                                        9723-411-456
                                    </address>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer__title">Social</h3>
                            <div className="footer__social">
                                <a
                                    href="https://www.facebook.com/share/1D4Pnfp73s/?mibextid=wwXIfr"
                                    target="_blank"
                                    className="footer__social-link"
                                >
                                    <i className="ri-facebook-circle-line" />
                                </a>
                                <a
                                    href="https://www.instagram.com/yashhraaj111?igsh=MXdnbzd1c3k2MWE5Mw%3D%3D&utm_source=qr"
                                    target="_blank"
                                    className="footer__social-link"
                                >
                                    <i className="ri-instagram-line" />
                                </a>
                                <a
                                    href="https://github.com/Yashraj992"
                                    target="_blank"
                                    className="footer__social-link"
                                >
                                    <i className="ri-github-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="footer__copy">
                    ©, All Rights Reserved By Yashrajsinh Mori .
                </span>
            </footer>
        </>
    )
}
