import React from "react";

const age = 50;
const res = age>= 18 ?"You are eligible for voting":"You are not eligible for voting";

const Conditional=()=>{
    return(
        <>
        <h1>Voting: {res}</h1>
        </>
    )
}
export default Conditional