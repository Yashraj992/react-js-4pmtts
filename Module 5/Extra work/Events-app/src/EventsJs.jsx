import React from "react";

const Add=()=>{
    let a = parseInt(prompt("Enter value of a:"));
    let b = parseInt(prompt("Enter value of b:"));
    let c = a + b;
    alert("Additions of a+b is:" + c)
}

const Sub=()=>{
    let a = parseInt(prompt("Enter value of a:"));
    let b = parseInt(prompt("Enter value of b:"));
    let c = a - b;
    alert("Subtraction of a-b is:" + c)
}

const Mult=()=>{
    let a = parseInt(prompt("Enter value of a:"));
    let b = parseInt(prompt("Enter value of b:"));
    let c = a * b;
    alert("Multiplication of a*b is:" + c)
}

const Div=()=>{
    let a = parseInt(prompt("Enter value of a:"));
    let b = parseInt(prompt("Enter value of b:"));
    let c = a / b;
    alert("Division of a/b is:" + c)
}

export {Add, Sub, Mult, Div}
