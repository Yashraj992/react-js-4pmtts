import React from "react";

const inline1={
    margin:"auto",
    backgroundColor:"black",
    width:"50%",
    marginTop:"20px"
}

const inline2={
    color:"white",
    fontSize:"20px",
    textAlign:"center"
}

function App(){

    const style1 ={
        ...inline1
    }
    const style2={
        ...inline2
    }
    return(
        <>
        <div style={style1}>
            <h1 style={style2}>Hi this is react.js</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, placeat?</p>
            <button>Learn More</button>
        </div>
        </>
    )
}

export default App