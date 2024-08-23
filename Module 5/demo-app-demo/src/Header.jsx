import React from "react";

function Header() {
    return (
        <>
            <nav className="bg-black text-white flex justify-between p-4">
                <ul className="flex text-xl gap-5 ms-32">
                    <li><a href="#" className="text-blue-700 hover:text-red-600">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-700">About</a></li>
                    <li><a href="" className="hover:text-blue-700">Resume</a></li>
                    <li><a href="" className="hover:text-blue-700">Portfolio</a></li>
                </ul>
                <div className="flex me-32 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <p>(-91)9723-411-456</p>
                </div>
            </nav>

            <div className="main">
                <div className="content ms-36 mt-40">
                    <p className="text-white text-3xl" style={{ fontSize: "40px" }}>Jason</p>
                    <h1 className="text-white text-5xl font-extrabold break-words" style={{ fontSize: "60px" }}>MARTIN</h1>
                    <p className="text-white mb-3 text-2xl">Graphic designer</p>
                    <button type="button" className="ms-1 text-white main-btn hover:bg-gray-900">Resume</button>
                    <button className="main-btn ms-3 text-white hover:bg-gray-900">Save Changes</button>
                </div>

            <div className="main-icons ms-36 mt-56">
                <i class="fa-brands fa-facebook-f text-white text-xl hover:text-red-700"></i>
                <i class="fa-brands fa-instagram text-white text-xl ms-5 hover:text-red-700"></i>
                <i class="fa-brands fa-linkedin-in text-white text-xl ms-5 hover:text-red-700"></i>
                <i class="fa-brands fa-twitter text-white text-xl ms-5 hover:text-red-700"></i>
            </div>
            </div>

        </>
    )
}

export default Header