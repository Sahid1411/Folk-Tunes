import React from "react";
import "../../Css/Header.css"

import Product_logo from "./Product_logo";
import Search from "./Search";
import Three_Button from "./Three_Button";


function Header(){
  return (
     
    // <div className="container">
     <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-0 custom-header" >
        {/* Product logo component with name  */}
        <Product_logo /> 

        {/* search bar and search logo component */}
        <Search />
 

        {/* login cart be-seller component  */}
        <Three_Button />

      </header>
    // </div>
     
    );
}

export default Header;