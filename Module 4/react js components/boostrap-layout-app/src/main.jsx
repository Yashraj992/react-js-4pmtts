import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from "./Container";
import BookHotel from "./BookHotel";

const root = ReactDOM.createRoot(document.getElementById("demo"));

root.render(
    <>
    <App />
    <BookHotel />
    </>
)