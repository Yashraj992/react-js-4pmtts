import React, { Component } from "react";
import img1 from './assets/images/logo.svg'
class Navbar extends Component {
    render() {
        return (
            <>
                <nav>
                        <div className="logo">
                            <img src={img1} alt="logo" />
                        </div>
                        <div className="sec">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Donate</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Cart(0)</a></li>
                            </ul>
                        </div>
                </nav>
            </>
        )
    }
}
export default Navbar