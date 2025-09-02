import React, { useEffect, useState } from "react";
import profile_svg from "../../assets/svg_&_images/profile-user.svg"
import {Link,  useNavigate,  useParams} from "react-router-dom";
import "..//../Css/Header.css"
import toast from "react-hot-toast";

function Three_Button(){   

  const navigate = useNavigate(); // ✅ Initialize navigate function
  const userId = localStorage.getItem("userId")?.replace(/"/g, ""); 
  const supplierId = localStorage.getItem("supplierId")?.replace(/"/g, ""); 
  const adminId = localStorage.getItem("adminId")?.replace(/"/g, ""); 


    return (
      <div className="d-flex col-md-3 text-end ">
         
        <div className="dropdown responsive-btn">
          <button type="button" className="btn btn-outline-warning me-1 dropdown-toggle" aria-expanded="false">
          Dashboards  
          </button>   
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/user/${userId}`}>Customer Profile</Link></li>
            <li><Link className="dropdown-item" to={`/supplier/${supplierId}`}>Supplier Profile</Link></li>
            <li><Link className="dropdown-item" to={`/admin/${adminId}`}>Admin Profile</Link></li>
          </ul>
        </div>
  
        <div className="dropdown responsive-btn" >
          <button type="button" className="btn btn-outline-warning me-1 dropdown-toggle" id="custom-hover" aria-expanded="false">
            <img style={{height:"20px"}} src={profile_svg} alt="profile-svg" /> Login
          </button>
          <ul className="dropdown-menu" >
            <li><Link className="dropdown-item"  to="/user/sign-in">User</Link></li>
            <li><Link className="dropdown-item" to="/supplier/sign-in">Supplier</Link></li>            
            <li><Link className="dropdown-item" to="/admin/sign-in">Admin</Link></li>            
          </ul>
        </div>
      
        

      </div>
    );
  }

export default Three_Button;  