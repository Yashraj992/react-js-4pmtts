import React from "react";
import { MDBContainer, MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";


function App() {
    return (
        <>
            <MDBContainer className="p-5 shadow mt-5">
                <h1 className="text-black">MDB Example</h1>

                <MDBCarousel showControls>
                    <MDBCarouselItem itemId={1}>
                        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                </MDBCarousel>
            </MDBContainer>
        </>
    )
}

export default App