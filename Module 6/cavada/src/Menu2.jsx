import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import pas1 from './assets/img/pastry1.png'
import pas2 from './assets/img/pastry2.png'
import pas3 from './assets/img/pastry3.png'
import pas4 from './assets/img/pastry4.png'
import pas5 from './assets/img/pastry5.png'
import pas6 from './assets/img/pastry6.png'
import pas7 from './assets/img/pastry7.png'
import pas8 from './assets/img/pastry8.png'
import pas9 from './assets/img/pastry9.png'
import pas10 from './assets/img/pastry10.png'
import pas11 from './assets/img/pastry11.png'
import pas12 from './assets/img/pastry12.png'
import Footer from './Footer'

export default function Menu2() {
    return (
        <>
            <Navbar />
            <div className="menu container mt-32">
                <div className='text-center'>
                    <button className='px-16 py-2 hover:bg-rose-200'><Link to="/menu" className='no-underline text-black text-xl'>Coffee</Link></button>
                    <button className='px-16 py-2 ms-2 hover:bg-rose-200' style={{ borderBottom: "1px solid #FF7377" }}><Link to="/pastry" className='no-underline text-black text-xl'>Pastry</Link></button>
                </div>

                <h1 className='text-center mt-5 p-1 font-bold'>Pastry</h1>

                {/* pastry-box1 */}
                <div className="pastry-box flex justify-between text-center">
                    <div className="box col-md-3 p-4">
                        <img src={pas1} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Donut</h5>
                        <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.</p>
                        <p className='text-xl font-semibold'>10$ <del>15$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas2} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Caramel bun</h5>
                        <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        <p className='text-xl font-semibold'>15$ <del>20$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas3} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Chocolate cookies</h5>
                        <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.</p>
                        <p className='text-xl font-semibold'>6$ <del>12$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>
                </div>

                {/* pastry-box2 */}
                <div className="pastry-box flex justify-between text-center">
                    <div className="box col-md-3 p-4">
                        <img src={pas4} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Cream cake</h5>
                        <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.</p>
                        <p className='text-xl font-semibold'>10$ <del>15$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas5} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Bun with kiwi</h5>
                        <p className='text-gray-500'>Mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        <p className='text-xl font-semibold'>6$ <del>15$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas6} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Croissant</h5>
                        <p className='text-gray-500'>Mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        <p className='text-xl font-semibold'>6$ <del>20$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>
                </div>

                {/* pastry-box3 */}
                <div className="pastry-box flex justify-between text-center">
                    <div className="box col-md-3 p-4">
                        <img src={pas7} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Three donuts</h5>
                        <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do sint.</p>
                        <p className='text-xl font-semibold'>6$ <del>15$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas8} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Sugar bun</h5>
                        <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.</p>
                        <p className='text-xl font-semibold'>9$ <del>15$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas9} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Cinnamon bun</h5>
                        <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.</p>
                        <p className='text-xl font-semibold'>4$ <del>10$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>
                </div>

                {/* pastry-box4 */}
                <div className="pastry-box flex justify-between text-center">
                    <div className="box col-md-3 p-4">
                        <img src={pas10} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Donut with nuts</h5>
                        <p className='text-gray-500'>Mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        <p className='text-xl font-semibold'>3$ <del>8$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas11} alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Berry bun</h5>
                        <p className='text-gray-500'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        <p className='text-xl font-semibold'>4$ <del>15$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>

                    <div className="box col-md-3 p-4">
                        <img src={pas12 } alt="" className='p-4' />
                        <h5 className='p-1 mt-4'>Viennese waffles</h5>
                        <p className='text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do sint.</p>
                        <p className='text-xl font-semibold'>14$ <del>20$</del></p>
                        <button className='btn btn-outline-dark'>Order</button>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}
