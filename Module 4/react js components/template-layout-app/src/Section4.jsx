import React, { Component } from "react";

class Section4 extends Component {
    render() {
        return (
            <>
                <div className="section4">
                    <div className="title">
                        <p>SHOP PRODUCTS</p>
                        <h1>Open 24/7/365.</h1>
                    </div>

                    <div className="card">
                        <div className="card1">
                            <div className="img1"></div>
                            <p className="name">White Tent</p>
                            <p className="price">$ 200.00 USD</p>
                            <button type="button" className="btn">Details</button>
                        </div>

                        <div className="card2">
                            <div className="img2"></div>
                            <p className="name">The Coffee Tumbler</p>
                            <p className="price">$ 35.00 USD</p>
                            <button>Details</button>
                        </div>

                        <div className="card3">
                            <div className="img3"></div>
                            <p className="name">Blue Canvas Pack</p>
                            <p className="price">$ 95.00 USD <del>$ 145.00 USD</del></p>
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Section4