import React from "react";
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from './assets/image/slider-1.jpg'
import img2 from './assets/image/slider-2.jpg'
import img3 from './assets/image/slider-3.jpg'

function Slider(){
    return(
        <>
        <MDBCarousel showControls showIndicators className="slider">
      <MDBCarouselItem itemId={1}>
        <img src={img1} className='w-100 slider-img' alt='...' />
        <MDBCarouselCaption className="slider-content">
          <h1 className="text-black">Minimal Menz Style</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, accusamus! Est eligendi maiores fugit laudantium.</p>
          <button className="btn btn-dark px-5">SHOP NOW</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={img2} className='w-100 slider-img' alt='...' />

        <MDBCarouselCaption className="slider-content">
          <h1 className="text-black">Minimal Menz Style</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button className="btn btn-dark px-5">SHOP NOW</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={img3} className='w-100 slider-img' alt='...' />
        <MDBCarouselCaption className="slider-content">
          <h1 className="text-black">Minimal Menz Style</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-dark px-5">SHOP NOW</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
        </>
    )
}
export default Slider