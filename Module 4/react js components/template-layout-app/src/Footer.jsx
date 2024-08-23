import React,{Component} from "react";
import img1 from './assets/images/logo.svg'

class Footer extends Component{
    render(){
        return(
            <>
            <footer>
                <img src={img1} alt="" />
                <p>Made In <span>Webflow</span>. © 2020.</p>
            </footer>
            </>
        )
    }
}
export default Footer