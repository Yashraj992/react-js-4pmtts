import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import './assets/admin/css/style.css'
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import AdminLayout from "./AdminLayout";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <Router>
        <Routes>
            <Route path="/" element= {<Layout/>}/>
            <Route path="/dashboard" element= {<Dashboard/>}/>
            <Route path="/admin-layout" element= {<AdminLayout/>}/>
        </Routes>
    </Router>
    </>
)