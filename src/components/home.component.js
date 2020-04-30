
import "../css/home.css";

import React, { Component } from "react";


export default class Home extends Component {
    render() {
 



    
    return (

        <div style={{width: 'auto'}}    className = "image">
         
        <div>


            <h2 class="center-align">We make Selling and Buying Real Estate</h2>
            <h1 className="center-align">Seemless</h1>
        </div>
        <div>
            <h3 class="center-align"> Get Started Now! </h3>
            <div className= 'container'>
            <div className="row center-align">
            <div className=" left">
            <a href='/sellercreate'>
                <button
                  style={{
                    width: "300px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3 butnplzr"
                >
                  I am a Seller
                </button>
                </a>
                </div>
                <div className=" right">
                    <a href='/buyercreate'>
                <button

                  style={{
                    width: "300px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
             
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3  butnplzl"
                >
                  I am a Buyer
                </button>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    );

}
}

// render() {
//     return (
//         <div className="container center-align">
//            <div className="row">
//         <img src={homeImg} alt="House" fluid />
//       </div>

//   <div>
//     <h2 class="center-align">We Make selling or buying Real Estate</h2>
//     <h1 class="center-align">Seemless</h1>
//   </div>
//       </div>
//     );

