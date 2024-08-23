import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css'
import App from "./Calculator";

const root = ReactDOM.createRoot(document.getElementById("calc"));

root.render(
    <>
    <App />
    </>
)