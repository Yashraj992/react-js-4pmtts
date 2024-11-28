import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Layout from "./Layout";
import Shop from "./Shop";
import Cart from "./Cart";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import Signin from "./Signin";
import Index from "./admin/Index";
import ManageEmployee from "./admin/ManageEmployee";
import AddProduct from "./admin/AddProduct";
import AddSubProduct from "./admin/AddSubProduct";
import ManageContact from "./admin/ManageContact";
import ManageFeedback from "./admin/ManageFeedback";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<Index />} />
        <Route path="/manage-employee" element={<ManageEmployee />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-subproduct" element={<AddSubProduct />} />
        <Route path="/manage-contact" element={<ManageContact />} />
        <Route path="/manage-feedback" element={<ManageFeedback />} />
      </Routes>
    </HashRouter>
  </>
)
