import React from 'react'
import { Container} from 'react-bootstrap'
import Navbar from './Navbar'
import Foooter from './Foooter'
import img1 from './assets/img/cat-1.jpg'
import img2 from './assets/img/cat-2.jpg'
import img3 from './assets/img/cat-3.jpg'
import img4 from './assets/img/cat-4.jpg'
import img5 from './assets/img/cat-5.jpg'
import img6 from './assets/img/cat-6.jpg'

export default function Categories() {
  return (
    <div>
      <Navbar />
      <Container fluid className='categories shadow'>
        <h1 className='text-gray text-center' style={{paddingTop:"150px",fontSize:"50px"}}>Categories</h1>
      </Container>

      <div className='cato' style={{marginTop:"150px"}}>
        <p className='img-fluid rounded shadow text-black' alt="" style={{backgroundImage: `url(${img1})`,height:"180px", width:"320px", backgroundSize:"cover",backgroundPosition:"right",marginLeft:"250px"}}>Nature</p>
        <p className='img-fluid rounded shadow' alt="" style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", height: "180px", width:"320px",backgroundPosition: "right" }}>Photography</p>
        <p className='img-fluid rounded shadow' alt="" style={{backgroundImage: `url(${img3})`,height:"180px", width:"320px", backgroundSize:"cover",backgroundPosition:"right"}}>Relaxation</p>
      </div>

      <div className='cato' style={{marginTop:"50px"}}>
        <p className='img-fluid rounded shadow' alt="" style={{backgroundImage: `url(${img4})`,height:"180px", width:"320px", backgroundSize:"cover",backgroundPosition:"right",marginLeft:"250px"}}>Vacation</p>
        <p className='img-fluid rounded shadow' alt="" style={{ backgroundImage: `url(${img5})`, backgroundSize: "cover", height: "180px", width:"320px",backgroundPosition: "right" }}>Travel</p>
        <p className='img-fluid rounded shadow' alt="" style={{backgroundImage: `url(${img6})`,height:"180px", width:"320px", backgroundSize:"cover",backgroundPosition:"right"}}>Adventure</p>
      </div>
      <br /><br /><br />
      
      <Foooter />
    </div>
  )
}
