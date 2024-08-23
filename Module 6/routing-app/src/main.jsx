import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import Layout from "./Layout";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    </>
)