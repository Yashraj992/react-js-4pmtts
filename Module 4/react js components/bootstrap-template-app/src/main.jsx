import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import Navbar from "./Navbar";
import Section1 from "./Section1";

const root = ReactDOM.createRoot(document.getElementById("bootstrap"));

root.render(
    <>
    <Navbar />
    <Section1 />
    </>
)