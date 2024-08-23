import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import Layout from "./Layout";
import Categories from "./Categories";
import About from "./About";
import Contact from "./Contact";
import 'animate.css'

const root = ReactDOM.createRoot(document.getElementById("demo"));

root.render(
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </>
)