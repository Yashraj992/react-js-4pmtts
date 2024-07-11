import React,{Component} from "react";
import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';

class Slider extends Component{
    render(){
        return(
            <>
            <div className="slider">
                <img src={img1} alt="sliders" />
                <img src={img2} alt="sliders" />
                <img src={img3} alt="sliders" />
            </div>
            </>
        )
    }
}
export default Slider