import React from "react";
import img1 from './assets/image/1.png'
import img2 from './assets/image/logo.png'

const style = {
    overflow: "hidden",
    backgroundColor: "white",
    display: "flex",
    margin: "50px 100px",
    fontFamily: "Georgia, serif"
}
const style1 = {
    display: "block",
    width: "55%",
    textAlign: "center",
    marginTop: "20px",
}
const style2 = {
    textAlign: "left",
    marginLeft: "130px"
}
const img = {
    width: "500px",
    margin: "80px 0"
}
const style3 = {
    display: "flex",
    height: "60px",
    width: "auto",
    marginLeft: "120px"
}
function About() {
    const combine = {
        ...style
    }
    const combine1 = {
        ...style,
        ...style1
    }
    const combine2 = {
        ...style2
    }
    const combine3 = {
        ...style3
    }
    const image = {
        ...style,
        ...img
    }



    return (
        <>
            <main style={combine}>
                <div style={combine1}>
                    <h1>ABOUT <span style={{ color: "blue" }}>US</span></h1>

                    <p>Your Great Subtitle Here <br /><span style={{ color: "blue", fontSize: "40px", fontWeight: "700" }}>-----</span></p>
                    <p><b>Nam ornate pharetra</b> seems vitae bandit.Aliquam sed <br /> masa vitae rises so dales moles tie vitae sit amit arcus. <br />Nunc ejecta's Leo neck Est dap bus a pellentasque erat</p>

                    <h4 style={combine2}>Do You Know What Helps You Make Your <br /> Point Clear?</h4>
                    <h4 style={combine2}>List like this one:</h4>

                    <input type="checkbox" style={{ marginLeft: "-230px" }} />
                    <label htmlFor="">Because the're simple.</label><br />
                    <input type="checkbox" style={{ marginLeft: "-143px", marginTop: "10px" }} />
                    <label htmlFor="">You can organize your idea clearly.</label><br />
                    <input type="checkbox" style={{ marginLeft: "-80px", marginTop: "10px" }} />
                    <label htmlFor="">And because you'll never forget to buy milk!</label>

                    <h4 style={{ marginLeft: "-190px" }}>The most important thing:</h4>
                    <p style={{ marginLeft: "-20px" }}>The audience won's miss the point of your presentation.</p>

                    <div style={combine3}>
                        <img src={img2} alt="" />
                        <div>
                            <h2 style={{ fontSize: "10px", marginLeft: "-60px" }}>Short <span>Text</span> Here</h2>
                            <p style={{ fontSize: "10px" }}>Nam ornate pharetra seem vitae.</p>
                            <p style={{ fontSize: "10px", marginLeft: "-5px" }}>bandit.aliquem sed masa vitae.</p>
                        </div>
                    </div>
                </div>

                <img style={image} src={img1} alt="" />
            </main>
        </>
    )
}

export default About