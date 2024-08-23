import React from "react";
function App() {
    return (
        <>
            <div className="main">
                <h1 className="h1">Contact Us</h1>
                <hr className="hr" />
                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat iusto, consequatur nemo animi fugit laboriosam modi ut?</p>

                <div className="content">
                    <div className="detail">

                        <div className="box">
                            <div className="data">
                                <p className="fa fa-mobile fa-2x icon"></p>
                                <p>Address</p>
                                <p>121 rock secret 21, avenue,Nwe york ny 98765454</p>
                            </div>

                            <div className="data">
                                <p className="fa fa-inbox fa-2x icon"></p>
                                <p>Email:</p>
                                <p>info@gmail.com</p>
                                <p>yash@gmai.com</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="data">
                            <p className="fa fa-phone fa-2x icon"></p>
                                <p>Call Us:</p>
                                <p>987654123</p>
                                <p>987654123</p>
                            </div>

                            <div className="data">
                            <p className="fa fa-inbox fa-2x icon"></p>
                                <p>121 rock secret 21, avenue,Nwe york ny 98765454</p>
                                    <span className="fa fa-facebook icon-2"></span>
                                    <span className="fa fa-instagram icon-2"></span>
                                    <span className="fa fa-linkedin icon-2"></span>
                                    <span className="fa fa-twitter icon-2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1721896818896!6m8!1m7!1stpOItHiXTPqX1QLBEagMQA!2m2!1d22.29016509603721!2d70.7748205298472!3f55.283470858182355!4f0.13233729235201963!5f0.7820865974627469" width="730" height="650" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App