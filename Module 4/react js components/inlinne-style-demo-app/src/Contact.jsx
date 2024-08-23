import React from "react";

const style1 = {
    margin:"60px 200px",
    padding:"40px",
    backgroundColor:"#3B459E",
    textAlign:"center",
    boxShadow:"0px 5px 25px 30px lightgray"
}
const style2 = {
    fontSize:"38px",
    color:"White"
}

const style3 ={
    fontSize:"18px",
    marginTop:"20px",
}
const style4 ={
    display:"flex",
    flexDirection:"column",
    padding:"50px"
}
const style5={
    padding:"10px 20px",
    margin:"10px 100px",
    border:"5px solid lightgray"
}
function Contact() {
    const combined ={
        ...style1,
        ...style2
    }
    const combined1 ={
        ...style3
    }
    const combined2 ={
        ...style4
    }
    const combined3={
        ...style5
    }
    return(
    <>
        <div style={combined}>
            <h1>Contact us</h1>
            <p style={combined1}>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. Cupiditate harum assumenda deserunt <br /> vitae ad sint odio! Dolor dolore excepturi expedita.</p>

            <form action="" style={combined2}>
                <input style={combined3} type="text" placeholder="Your name"/>
                <input style={combined3} type="mail" placeholder="Your mail"/>
                <input style={combined3} type="text" placeholder="Your message"/>
            </form>
        </div>
    </>
    )
}
export default Contact