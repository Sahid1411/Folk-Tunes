import React from "react";
import "../../Css/Navbar.css"
import Navitems from "./Navitems";


function Navbar(){

    return (
    <div className="container">
      <header className="d-flex justify-content-center py-1 border-bottom ">

      {/* navbar items component */}
      <Navitems />  

      </header>
  </div>
    );
}
export default Navbar;