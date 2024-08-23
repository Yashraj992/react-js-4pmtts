import React from "react";
import ReactDOM from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.css'
import Header from "./Header";
import Navbar from "./Navbar";
import Offer from "./Offer";
import Slider from "./Slider";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    <Header />
    <Navbar />
    <Offer />
    <Slider />
    <Card />
    </>
)