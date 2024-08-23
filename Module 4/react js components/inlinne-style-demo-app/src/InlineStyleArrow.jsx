import React from "react";

const style1 = {
    backgroundColor :"blue",
    textAlign: "center",
    padding :"40px",
    margin:"100px",
    marginTop:"10px"
}

const style2 = {
    fontSize: "50px",
    textAlign: "center",
    color:"black"
}

const style3 = {
    fontSize:"20px",
    color :"red"
}

const App1=()=>{
    const combined ={
        ...style1,
        ...style2
    }

    const combined1 ={
        ...style3
    }


    return(
        <>
        <div style={combined}>
            <h1>This is combined inline css.</h1>
            <p style={combined1}>Two object combined in one object from sprade operators.</p>
        </div>
        </>
    )
}
export default App1