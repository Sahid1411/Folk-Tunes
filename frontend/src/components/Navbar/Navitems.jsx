import React from "react";
import {Link} from "react-router-dom";

function Navitems(){
    return ( 
      <>
  
        {/* <div className="border"> */}  
        <ul className="nav nav-pills">
        {/* <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li> */}
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>

        <li className="nav-item dropdown">
          <div className="dropdown">
            <a href="#" className="nav-link dropdown-toggle">Categories</a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/bodo">Bodo</Link></li>
              <li><Link className="dropdown-item" to="/mishing">Mishing</Link></li>
              <li><Link className="dropdown-item" to="/karbi">Karbi</Link></li>
              <li><Link className="dropdown-item" to="/tiwa">Tiwa</Link></li>
              <li><Link className="dropdown-item" to="/rabha">Rabha</Link></li>
              <li><Link className="dropdown-item" to="/sonowal-kachari">Sonowal Kachari</Link></li>
            </ul>
          </div> 
        </li>

        {/* <li className="nav-item"><a href="#" className="nav-link">About us</a></li> */}
        <li><Link className="nav-link" to="/about">About us</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact us</Link></li>
        {/* <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li> */}
        <li className="nav-item"><Link className="nav-link" to="/docs">Docs</Link></li>
        
      <Link style={{marginLeft:'40px'}} className="btn btn-primary fw-bold"  to='/cart'><i  class="fa-solid fa-cart-shopping me-2" />Cart</Link> 
      </ul>

      {/* </div> */}

      {/* <div >
      <Link className="btn btn-primary fw-bold"><i  class="fa-solid fa-cart-shopping me-2" />Cart</Link> 
      </div> */}



    </>
    );
}

export default Navitems;