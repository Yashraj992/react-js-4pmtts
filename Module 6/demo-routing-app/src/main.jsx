import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import Layout from "./Layout"
import About from "./About";
import Shop from "./Shop";
import Blog from "./Blog";
import Cart from "./Cart";
import IconCart from "./IconCart";
import Index from "./admin";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="/about-us" element={<About />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/icon-cart" element={<IconCart />}/>
            <Route path="/dashboard" element={<Index />}/>
        </Routes>
    </Router>
    </>
)
