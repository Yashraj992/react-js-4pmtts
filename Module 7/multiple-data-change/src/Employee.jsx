import React,{useState} from "react";

function App1(){
    const[data,setData]=useState("js");

    return(
        <>
        <h1>This is : {data}</h1>
        <button onClick={()=>{setData("React.js")}}>Click for change</button>
        </>
    )
}

export default App1