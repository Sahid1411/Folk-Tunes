import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header/Header";
import boy_avatar from "../assets/svg_&_images/boy avatar.svg";
import profile_user from "../assets/svg_&_images/profile-user.svg";
import order from "../assets/svg_&_images/order.png";
import chevron_right from "../assets/svg_&_images/chevron-right.svg";
import logout from "../assets/svg_&_images/logout.png";
import Navbar from "../components/Navbar/Navbar";
import "./Supplier.css";

function Supplier() {
  const [suppliers, setSuppliers] = useState({ name: "", email: "", address: "" }); ;
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/suppliers/${id}`);
        setSuppliers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("supplierId"); // ✅ Clear stored ID
    toast.success("Logged out successfully!", { position: "top-right" });
    navigate("/supplier/sign-in"); // ✅ Redirect to login
  };

  const supplierId = localStorage.getItem("supplierId")?.replace(/"/g, ""); 
  
  return (
    <>
      <div>
        <Header />
        <Navbar />

        {supplierId ?  

        <div className="container">
          <div style={{ marginTop: "10px" }} className="row ">
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 ">
              <div className="row ">
                <div style={{ backgroundColor: "white" }} className="d-flex">
                  <div>
                    <img
                      style={{  height: "50px",  width: "50px",  marginRight: "20px",  marginTop: "13px"}} src={boy_avatar}   alt="avatar"
                    />
                  </div>

                  <div style={{ marginTop: "13px" }}>
                      <p>
                        Hello,
                        <br />
                        <span style={{ fontWeight: "bold" }}>
                          {suppliers.name}
                        </span>
                      </p>
                  </div>
                </div>

                <div style={{ backgroundColor: "white" }} className="my-4" id="list-style-none">
                 
                    <li>
                      <div className="row">
                        <div className="col-3">
                          <img   style={{     height: "30px",     width: "30px",     marginTop: "13px",   }}   src={order}   alt="" />
                        </div>
                        <div className="col-9 d-flex">
                          <h5  style={{    marginTop: "14px",    fontWeight: "bolder",    color: "GrayText",  }}>
                            Orders
                          </h5> 
                          <Link to='/supplier/get-orders'>
                           <img   style={{height: "10px",width: "10px",marginLeft: "20px",marginTop: "22px"}}  src={chevron_right}  alt="chevron-right" />
                          </Link> 
                        </div>
                      </div>
                    </li>
                    <hr />

                    <li>
                      <div className="row">
                        <div className="col-3 ">
                          <img    style={{      height: "30px",      width: "30px",      marginTop: "13px",    }}    src={profile_user}    alt=""  />
                        </div>
                 
                        <div className="col-9 ">
                          <h5      style={{        marginTop: "14px",        fontWeight: "bolder",        color: "GrayText",      }}    >
                            Account Setting
                          </h5>
                          <div style={{ marginTop: "25px" }}>
                            
                            <li className="hover" style={{marginTop:'2px'}}><Link  to={`/supplier/${id}`}>Profile information</Link></li> 
                            <li style={{marginTop:'12px'}}><Link  to='/supplier/addProduct'>Add Products</Link></li>
                            <li style={{marginTop:'12px'}}><Link  to='/supplier/products'>Your Products</Link></li> 
                            <li style={{marginTop:'12px'}}><Link >Reviews</Link></li> 
                            
                          </div>
                        </div>
                      </div> 
                      <hr />
                    </li>

                    <li>
                      <div style={{marginBottom: "10px"}}  className="row">
                        <div className="col-3">
                          <img  style={{    height: "30px",    width: "30px",    marginTop: "18px",  }}  src={logout}  alt="logout"/>
                        </div>
                        <div className="col-9 d-flex">
                          <h5  onClick={handleLogout}  style={{    marginTop: "14px",    fontWeight: "bolder",    color: "GrayText",cursor:'pointer'  }}>  LogOut </h5>
                          <img        style={{          height: "10px",          width: "10px",          marginLeft: "20px",          marginTop: "22px",        }}        src={chevron_right}        alt="chevron-right"      />
                        </div>
                      </div>
                    </li>
                  
                </div>
              </div>  
            </div>

            <div className="col-lg-9 col-md-9 col-sm-9 col-12 ">
              <div style={{ backgroundColor: "white" }} className="">
                    <div className="row">
                      <div className="personal-details m-4 d-flex flex-wrap justify-content-between">
                        <div>
                          <h5 style={{ fontWeight: "bold" }}>
                            Personal Information:
                          </h5>
                          <input  style={{ cursor: "not-allowed" }}  type="text"  placeholder={suppliers.name}  disabled/>
                        </div>

                        <div>
                          <Link
                            style={{ marginRight: "50px", width: "60%" }}
                            className="btn btn-outline-primary"
                            to={`/update/supplier/${suppliers._id}`} //  /update/supplier/:id
                          >
                            <i className="fa-solid fa-pen-to-square" />
                            Edit
                          </Link>
                        </div>
                      </div>

                      <div className="personal-details mx-4">
                        <p>Gender: </p>
                        <input style={{ cursor: "not-allowed" }} type="text" placeholder={suppliers.gender} disabled />
                      </div>
                    </div>

                    <div className="row">
                      <div style={{ marginTop: "55px" }} className="personal-details mx-4" >
                        <h5 style={{ fontWeight: "bold" }}>Email Address: </h5>
                        <input style={{ width: "50%", cursor: "not-allowed" }} type="text" placeholder={suppliers.email} disabled />
                      </div>
                    </div>

                    <div className="row">
                      <div className="personal-details m-4">
                        <h5 style={{ fontWeight: "bold" }}>Mobile Number: </h5>
                        <input style={{ cursor: "not-allowed" }} type="text" placeholder={suppliers.phone} disabled />
                      </div>
                    </div>

                    <div className="row">
                      <div className="personal-details m-4">
                        <h5 style={{ fontWeight: "bold" }}>Address: </h5>
                        <input style={{ width: "70%", cursor: "not-allowed" }} type="text" placeholder={suppliers.address} disabled/>
                      </div>
                    </div>
              </div>
            </div>
          </div>  
        </div>   

        : <div style={{height:'50vh'}} className="d-flex justify-content-center align-items-center">
          <p id='custom-para'>no supplier signed in , please sign in first <Link to='/supplier/sign-in'>Sign In</Link> </p> 
        </div>  }

      </div>
    </>
  );
}
export default Supplier;
