import React from "react";
import ReactDOM from "react-dom/client";
import Conditional from "./TernaryOperator";
import Age from "./IfElse";
import If from "./If";
import Ternary from "./Ternary";

const root = ReactDOM.createRoot(document.getElementById("demo"));

root.render(
    <>
    <Conditional />
    <Age />
    <If />
    <Ternary />
    </>
)