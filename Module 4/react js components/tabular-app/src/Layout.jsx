import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Contant from "./Contant";
import Footer from "./Footer";
class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Navbar />
                <Slider />
                <Contant />
                <Footer />
            </>
        )
    }
}
export default Layout