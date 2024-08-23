import React from "react";

const style1 = {
    backgroundColor :"black",
    textAlign: "center",
    padding :"40px",
    margin:"100px"
}

const style2 = {
    fontSize: "50px",
    textAlign: "center",
    color:"red"
}

const style3 = {
    fontSize:"18px",
    color :"white"
}

function App(){
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
export default App