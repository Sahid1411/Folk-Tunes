import React from "react";
import logo from "../../assets/svg_&_images/Folk Tunes.png"
import new_logo from "../../assets/svg_&_images/new-logo.png"
import {Link} from "react-router-dom";

function Product_logo(){
    return (
          <div className="d-flex col-md-3 mb-1 mb-md-0">

              <Link className="d-inline-flex link-body-emphasis text-decoration-none" to='/'>
                <img style={{height:"90px", width:"100px",}} src={new_logo} alt="logo" />
              </Link>
              
              <Link style={{margin:"auto",textDecoration:"none"}} to="/" >
                <p id="responsive-name" style={{fontWeight:"500",fontSize:"25px",color:"#0aad0a"}}>Folk Tunes</p>              
              </Link>
            
          </div>
    );
}

export default Product_logo;