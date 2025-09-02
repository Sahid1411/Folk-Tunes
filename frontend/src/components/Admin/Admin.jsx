import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import toast from "react-hot-toast";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

import boy_avatar from "../../assets/svg_&_images/boy avatar.svg";
import profile_user from "../../assets/svg_&_images/profile-user.svg";
import order from "../../assets/svg_&_images/order.png";
import chevron_right from "../../assets/svg_&_images/chevron-right.svg";
import logout from "../../assets/svg_&_images/logout.png";

function Admin() {
  const [users, setUsers] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/admin/${id}`
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("adminId"); // ✅ Clear stored ID
    toast.success("Logged out successfully!", { position: "top-right" }); // !userId
    navigate("/admin/sign-in"); // ✅ Redirect to login
  };

  const adminId = localStorage.getItem("adminId")?.replace(/"/g, "");

  return (
    <>
      <div>
        {/* navbar */}
        <Header />
        <Navbar />
        {adminId ? (
          <div className="container">
            <div style={{ marginTop: "10px" }} className="row ">
              <div className="col-lg-3 col-md-3 col-sm-3 col-12 ">
                <div className="row ">
                  <div style={{ backgroundColor: "white" }} className="d-flex">
                    <div>
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          marginRight: "20px",
                          marginTop: "13px",
                        }}
                        src={boy_avatar}
                        alt="avatar"
                      />
                    </div>

                    <div style={{ marginTop: "13px" }}>
                      <p>
                        Hello Admin,
                        <br />
                        <span style={{ fontWeight: "bold" }}>{users.name}</span>
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ backgroundColor: "white" }}
                    className="my-4"
                    id="list-style-none"
                  >
                    <li>
                      <div className="row">
                        <div className="col-3">
                          <img
                            style={{
                              height: "30px",
                              width: "30px",
                              marginTop: "13px",
                            }}
                            src={order}
                            alt=""
                          />
                        </div>
                        <div className="col-9 d-flex">
                          <h5
                            style={{
                              marginTop: "14px",
                              fontWeight: "bolder",
                              color: "GrayText",
                            }}
                          >
                            {" "}
                            Orders
                          </h5>
                          <Link to="/admin/get-orders">
                            <img
                              style={{
                                height: "10px",
                                width: "10px",
                                marginLeft: "20px",
                                marginTop: "22px",
                              }}
                              src={chevron_right}
                              alt="chevron-right"
                            />
                          </Link>
                        </div>
                      </div>
                    </li>
                    <hr />

                    <li>
                      <div className="row">
                        <div className="col-3 ">
                          <img
                            style={{
                              height: "30px",
                              width: "30px",
                              marginTop: "13px",
                            }}
                            src={profile_user}
                            alt=""
                          />
                        </div>

                        <div className="col-9 ">
                          <h5
                            style={{
                              marginTop: "14px",
                              fontWeight: "bolder",
                              color: "GrayText",
                            }}
                          >
                            Account Setting
                          </h5>
                          <div style={{ marginTop: "25px" }}>
                            <li className="hover" style={{ marginTop: "2px" }}>
                              <Link to="/admin">Profile information</Link>
                            </li>
                            <li style={{ marginTop: "12px" }}>
                              <Link to="/suppliers">Manage Suppliers</Link>
                            </li>
                            <li style={{ marginTop: "12px" }}>
                              <Link to="/getusers">Manage Users</Link>
                            </li>
                            <li style={{ marginTop: "12px" }}>
                              <Link to="/products">Manage Products</Link>
                            </li>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </li>

                    <li>
                      <div className="row">
                        <div className="col-3">
                          <img
                            style={{
                              height: "30px",
                              width: "30px",
                              marginTop: "13px",
                            }}
                            src={logout}
                            alt="logout"
                          />
                        </div>
                        <div
                          style={{ marginBottom: "10px" }}
                          className="col-9 d-flex"
                        >
                          <h5
                            onClick={handleLogout}
                            style={{
                              marginTop: "14px",
                              fontWeight: "bolder",
                              color: "GrayText",
                              cursor: "pointer",
                            }}
                          >
                            LogOut
                          </h5>
                          <img
                            style={{
                              height: "10px",
                              width: "10px",
                              marginLeft: "20px",
                              marginTop: "22px",
                            }}
                            src={chevron_right}
                            alt="chevron-right"
                          />
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
              
              {/* right component */}
              <div className="col-lg-9 col-md-9 col-sm-9 col-12 ">
                <div style={{ backgroundColor: "white" }} className="">
                  <div className="row">
                    <div className="personal-details m-4 d-flex flex-wrap justify-content-between">
                      <div>
                        <h5 style={{ fontWeight: "bold" }}>
                          Personal Information:
                        </h5>
                        <input
                          style={{ cursor: "not-allowed" }}
                          type="text"
                          placeholder={users.name}
                          disabled
                        />
                      </div>

                      <div>
                        <Link
                          style={{ marginRight: "50px", width: "60%" }}
                          className="btn btn-outline-primary"
                          to={`/admin/update/${users._id}`}
                        >
                          <i className="fa-solid fa-pen-to-square" />
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div
                      style={{ marginBottom: "20px", marginTop: "55px" }}
                      className="personal-details mx-4"
                    >
                      <h5 style={{ fontWeight: "bold" }}>Email Address: </h5>
                      <input
                        style={{ cursor: "not-allowed" }}
                        type="text"
                        placeholder={users.email}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ height: "50vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <p id="custom-para">
              no admin signed in , please sign in first{" "}
              <Link to="/admin/sign-in">Sign In</Link>{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Admin;
