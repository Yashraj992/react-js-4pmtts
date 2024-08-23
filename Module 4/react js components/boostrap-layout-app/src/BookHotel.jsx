import React from "react";
import { Container, Row, Form } from "react-bootstrap";

function BookHotel(){
    return(
        <>
        <Container className="p-5">
            <div className="modal fade" id="book" role="dialog">
                <div className="modal-dialog">
                <div className="modal-content p-4">
                    <h1 className="text-center">Book Hotels <button type="button" className="border-0 text-danger"></button></h1>
                    <Row>
                        <div className="col-md-4">
                            <img className="img-fluid w-100" src="https://www.essential.co.uk/files/guyWithPhone-min.gif" alt="" />
                        </div>

                        <div className="col-md-8">
                            <Form>
                                <div className="from-group p-2">
                                    <input type="text" placeholder="Name *" className="form-control border border-2"/><br />
                                    <input type="text" placeholder="Email *" className="form-control border border-2"/><br />
                                    <input type="text" placeholder="Book Room *" className="form-control border border-2"/><br />
                                    <input type="text" placeholder="Members *" className="form-control border border-2"/><br />
                                    <input type="submit" value="Book" className="col-md-4 btn btn-md btn-dark"/>
                                </div>
                            </Form>
                        </div>
                    </Row>
                </div>
                </div>
            </div>
        </Container>
        </>
    )
}
export default BookHotel