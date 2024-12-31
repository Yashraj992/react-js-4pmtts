import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import c1 from './assets/img/coffee1.png'
import c2 from './assets/img/coffee2.png'
import c3 from './assets/img/coffee3.png'
import c4 from './assets/img/coffee4.png'
import c5 from './assets/img/coffee5.png'
import c6 from './assets/img/coffee6.png'
import c7 from './assets/img/coffee7.png'
import c8 from './assets/img/coffee8.png'
import c9 from './assets/img/coffee9.png'
import c10 from './assets/img/coffee10.png'
import c11 from './assets/img/coffee11.png'
import c12 from './assets/img/coffee12.png'
import c13 from './assets/img/coffee13.png'
import c14 from './assets/img/coffee14.png'
import c15 from './assets/img/coffee15.png'
import c16 from './assets/img/coffee16.png'
import c17 from './assets/img/coffee17.png'
import c18 from './assets/img/coffee18.png'
import Footer from './Footer'

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="menu container mt-32">
        <div className='text-center'>
          <button className='px-16 py-2 hover:bg-rose-200' style={{ borderBottom: "1px solid #FF7377" }}><Link to="/menu" className='no-underline text-black text-xl'>Coffee</Link></button>
          <button className='px-16 py-2 ms-2 hover:bg-rose-200'><Link to="/pastry" className='no-underline text-black text-xl'>Pastry</Link></button>
        </div>

        <h1 className='text-center mt-5 p-1 font-bold'>Coffee</h1>

        {/* coffee-box1 */}
        <div className="coffee-box flex justify-between text-center">
          <div className="box col-md-3 p-4">
            <img src={c1} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Cappuccino</h5>
            <p className='text-gray-500'>Deserunt est eius ut vero. Maxime modi sit doloribus est sapiente.</p>
            <p className='text-xl font-semibold'>9$ <del>13$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c2} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Macchiato</h5>
            <p className='text-gray-500'>Nesciunt et pariatur. Magnam in magni et omnis. Aliquid est nihil.</p>
            <p className='text-xl font-semibold'>6$ <del>15$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c3} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Mocha</h5>
            <p className='text-gray-500'>Pariatur ratione at ex voluptatem iure omnis. Sunt aperiam commodi in.</p>
            <p className='text-xl font-semibold'>10$ <del>20$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>
        </div>

        {/* coffee-box2 */}
        <div className="coffee-box flex justify-between text-center">
          <div className="box col-md-3 p-4">
            <img src={c4} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Breve</h5>
            <p className='text-gray-500'>Omnis deleniti velit qui optio. Illum qui alias impedit. Odit recusandae omnis.</p>
            <p className='text-xl font-semibold'>10$ <del>15$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c5} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Corretto</h5>
            <p className='text-gray-500'>Placeat molestiae voluptatem. Placeat molestiae voluptatem.</p>
            <p className='text-xl font-semibold'>6$ <del>12$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c6} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Raf</h5>
            <p className='text-gray-500'>Et nulla temporibus suscipit est fuga ut rerum quibusdam.  velit aut sed.</p>
            <p className='text-xl font-semibold'>9$ <del>13$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>
        </div>

        {/* coffee-box3 */}
        <div className="coffee-box flex justify-between text-center">
          <div className="box col-md-3 p-4">
            <img src={c7} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Glace</h5>
            <p className='text-gray-500'>Dolores doloremque delectus. Fugiat quia cumque.</p>
            <p className='text-xl font-semibold'>6$ <del>15$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c8} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Espresso Laccino</h5>
            <p className='text-gray-500'>Quas eum nulla debitis incidunt quae culpa quia quas aspernatur. Distinctio </p>
            <p className='text-xl font-semibold'>6$ <del>12$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c9} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Irish Coffee</h5>
            <p className='text-gray-500'>Quasi illum quo fuga sed provident. Expedita eum ut.</p>
            <p className='text-xl font-semibold'>6$ <del>12$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>
        </div>

        {/* coffee-box4 */}
        <div className="coffee-box flex justify-between text-center">
          <div className="box col-md-3 p-4">
            <img src={c10} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Lungo</h5>
            <p className='text-gray-500'>Culpa in dicta nemo quasi laborum ullam ut maxime.</p>
            <p className='text-xl font-semibold'>10$ <del>15$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c11} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Flat White</h5>
            <p className='text-gray-500'>Dignissimos odio libero. Quia earum eum voluptatem id fuga pariatur.</p>
            <p className='text-xl font-semibold'>10$ <del>20$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c12} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Cafe` Breve</h5>
            <p className='text-gray-500'>Molestias ex aut suscipit rerum. Magnam quas qui consequatur.</p>
            <p className='text-xl font-semibold'>6$ <del>12$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>
        </div>

        {/* coffee-box5 */}
        <div className="coffee-box flex justify-between text-center">
          <div className="box col-md-3 p-4">
            <img src={c13} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Latte</h5>
            <p className='text-gray-500'>Ducimus delectus fugit delectus ipsa aspernatur. Eveniet doloremque.</p>
            <p className='text-xl font-semibold'>6$ <del>15$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c14} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Americano</h5>
            <p className='text-gray-500'>Autem doloremque natus consequatur vitae est et. Quia ad dolore.</p>
            <p className='text-xl font-semibold'>10$ <del>20$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c15} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Caffe` Ginseng</h5>
            <p className='text-gray-500'>Eos est accusamus et veritatis quibusdam dignissimos aut corrupti et.</p>
            <p className='text-xl font-semibold'>10$ <del>15$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>
        </div>

        {/* coffee-box6 */}
        <div className="coffee-box flex justify-between text-center">
          <div className="box col-md-3 p-4">
            <img src={c16} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Macchiato chiaro</h5>
            <p className='text-gray-500'>Doloribus harum alias qui dolor aperiam. Voluptas non aut dolor ipsa.</p>
            <p className='text-xl font-semibold'>6$ <del>12$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c17} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Espresso</h5>
            <p className='text-gray-500'>Consequatur consectetur consequuntur rerum. delectus sequi.</p>
            <p className='text-xl font-semibold'>14$ <del>20$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>

          <div className="box col-md-3 p-4">
            <img src={c18} alt="" className='p-4' />
            <h5 className='p-1 mt-4'>Ristretto</h5>
            <p className='text-gray-500'>Eius fugit natus est minus velit eius. Perspiciatis ut di</p>
            <p className='text-xl font-semibold'>10$ <del>15$</del></p>
            <button className='btn btn-outline-dark'>Order</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
