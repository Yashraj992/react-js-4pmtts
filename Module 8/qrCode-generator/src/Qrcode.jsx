import React, { useState, useEffect } from 'react'

export default function Qrcode() {
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState("");
    const [bgColor, setBgColor] = useState("");
    const [qrCode, setQrCode] = useState("");


    // Changing the URL only when the user
    // changes the input
    useEffect(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]);

    // Updating the input word when user click on the generate button
    function handleClick() {
        setWord(temp);
    }
    return (
        <>
            <div className="App container mt-4 bg-light p-5 shadow">
                <h1>QR Code Generator</h1>
                <div className="input-box">
                    <div className="gen input-group">
                        <input type="text form-control" onChange={
                            (e) => { setTemp(e.target.value) }}
                            placeholder="Enter text to encode" />
                        <button className="button input-group-text btn btn-success"
                            onClick={handleClick}>
                            Generate
                        </button>
                    </div>
                    <div className="extra">
                        <h5>Background Color:</h5>
                        <input type="color" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} />
                        <h5>Dimension:</h5>
                        <input type="range" min="200" max="600"
                            value={size} onChange={(e) => { setSize(e.target.value) }} />
                    </div>
                </div>
                <div className="output-box">
                    <img src={qrCode} alt="" />
                    <a href={qrCode} download="QRCode">
                        <button type="button">Download</button>
                    </a>
                </div>
            </div>
        </>
    )
}
