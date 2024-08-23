import React from "react";
import { MDBCard, MDBCardImage, MDBRow, MDBCol, MDBCardOverlay, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import img1 from './assets/image/card-1.jpg'
import img2 from './assets/image/card-2.jpg'
import img3 from './assets/image/card-3.jpg'

function Card() {
    return (
        <>
            <MDBRow className='p-5 row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <MDBCard className='h-100'>
                        <MDBCardImage overlay src={img1} alt='...'/>
                        <MDBCardOverlay className="text-center text-white card-img">
                            <MDBCardTitle className="card-title fs-4">Men's Fashion</MDBCardTitle>
                            <MDBCardText className="fs-5 card-p">Shop Now</MDBCardText>
                        </MDBCardOverlay>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100'>
                        <MDBCardImage overlay src={img2} alt='...' />
                        <MDBCardOverlay className="text-center text-white card-img">
                            <MDBCardTitle className="card-title fs-4">Women's Fashion</MDBCardTitle>
                            <MDBCardText className="fs-5 card-p">Shop Now</MDBCardText>
                        </MDBCardOverlay>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100'>
                        <MDBCardImage overlay src={img3} alt='...' />
                        <MDBCardOverlay className="text-center text-white card-img">
                            <MDBCardTitle className="card-title fs-4">Baby Fashion</MDBCardTitle>
                            <MDBCardText className="fs-5 card-p">Shop Now</MDBCardText>
                        </MDBCardOverlay>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default Card