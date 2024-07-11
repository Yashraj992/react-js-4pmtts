import React,{Component} from "react";

class Header extends Component{
    render(){
        return(
            <>
            <div className="header">
                <div className="call">Call us:(+91 9723411456)</div>
                <div className="search">
                    <input type="text" placeholder="Search anything here......"/>
                </div>
                <div className="account">
                    <button>Create account</button>
                </div>
            </div>
            </>
        )
    }
}
export default Header