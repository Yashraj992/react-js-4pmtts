import React from "react";

function About() {
    return (
        <>
            <div className="about" id="about">
                <h1 className="text-white ms-36 mt-28 text-5xl font-bold tracking-wider">About</h1>
                <hr className="w-40 border-blue-700 border-solid border-2 ms-36" />
                <p className="text-white ms-36 mt-2 text-xl tracking-wider">jmartin@gmail.com</p>

                <p className="text-white ms-36 w-128 mt-20 text-xl tracking-wider">Graphic Designer with over 10years of experience specializing in IT Department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness,which enables me to permanently streamline infrastructure and applications.</p>

                <p className="text-white mt-28 ms-52">Florida, Oriando</p>
                <p className="ms-36">
                    <span className="flex">
                        <hr className="w-10 mt-3 border-blue-700 border-solid border-2" />
                        <p className="text-white ms-2">12569 State Road s3s</p>
                        <hr className="w-10 ms-2 mt-3 border-blue-700 border-solid border-2" />
                    </span>
                </p>
            </div>
        </>
    )
}

export default About