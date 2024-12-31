import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';

export default function Products() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/produts`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
    })
    return (
        <>
            <Container>
                {product && product.map((item) => {
                    return (
                        <>
                            <Row className='mt-4 shadow p-5'>
                                <div className="col-md-4">
                                    <img src={item.photo} alt="" className='img-fluid' style={{ width: "250px" }} />
                                </div>

                                <div className="col-md-8 mt-5">
                                    <p className='fs-4'>Name: {item.name}</p>
                                    <p className='fs-4'>Price: <span><del className='text-danger'>{item.oldprice}</del> {item.price}</span></p>
                                    <p className='fs-5'>Details: {item.detail}</p>
                                </div>
                            </Row>
                        </>
                    )
                })}
            </Container>
        </>
    )
}
