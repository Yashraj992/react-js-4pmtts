import React, { Component } from "react";

class Section2 extends Component {
    render() {
        return (
            <>
                <div className="sec2">
                    <div className="sec2-detail">
                        <div className="detail1">
                            <p>WAYS TO SUPPORT</p>
                            <h1>Support Acme Outdoors.</h1>
                        </div>
                        <div className="detail2">
                            <p>COVID-19 has forced us to close our retail space, but we need <br /> support from patrons like yourself now more than ever. Below, we've <br /> listed the best ways to help us through this season.</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box1">
                            <div className="shop">
                                <b>01</b>
                                <h1>SHOP <br />PRODUCTS</h1>
                            </div>
                            <p>Our full product line is still available online <br /> here on our site! Getting outside and hiking is <br /> still something you can do. Get your gear <br /> now!</p>
                        </div>
                        <div className="box2">
                            <div className="donate">
                            <b>02</b>
                            <h1>DONATE</h1>
                            </div>
                            <p>Since we've changed the way we operate to <br /> online only, and to ensure your safety, not all <br /> our staff is working. Donate to keep them <br /> afloat.</p>
                        </div>
                        <div className="box3">
                            <div className="gift">
                        <b>03</b>
                        <h1>BUY <br /> GIFT CARDS</h1>
                        </div>
                        <p>Have all the outdoor gear you need for <br /> now? Buy a gift card and use it later or share <br /> it with friends and family.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Section2