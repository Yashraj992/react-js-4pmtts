import React from "react";
const style ={
    backdropFilter:"blur(5px)",
    color:"white",
    textAlign:"center",
    boxShadow:"0 0 20px 5px lightgray",
    padding:"20px"
}

const style1 ={
    display:"flex",
    flexDirection:"column",
    margin:"30px 200px",
}

const style2={
    padding:"15px",
    margin:"10px 0",
    fontSize:"22px"
}

const style3={
    backgroundColor:"black",
    color:"white",
    border:"none"
}

const style4={
    fontSize:"22px"
}
function LogIn(){
    const combine={
        ...style
    }
    const combine1={
        ...style1
    }
    const combine2={
        ...style2
    }
    const combine3={
        ...style2,
        ...style3
    }
    const combine4={
        ...style4
    }
    return(
        <>
        <div style={combine}>
            <h1>Log In</h1>

            <form action="" style={combine1}>
                <input type="text" placeholder="Username" style={combine2}/>
                <input type="password" placeholder="Password" style={combine2}/>
                <button style={combine3}>Log In</button>
            </form>

            <p style={combine4}>Not a member? <span style={{color:"rgba(0, 0, 0, 0.4)"}}>Sign up</span></p>
        </div>
        </>
    )
}
export default LogIn