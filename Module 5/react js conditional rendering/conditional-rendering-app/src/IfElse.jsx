import React from "react";

function Age(){
    const age = 10;
    if(age>=18){
        var res = "You are eligible for voting"
    }
    else{
        var res = "You are not eligible for voting"
    }
    return(
        <>
        <h1>Result: {res}</h1>
        </>
    )
}
export default Age