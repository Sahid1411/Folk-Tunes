import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import boy_avatar from "../../assets/svg_&_images/boy avatar.svg";
import profile_user from "../../assets/svg_&_images/profile-user.svg";
import order from "../../assets/svg_&_images/order.png";
import chevron_right from "../../assets/svg_&_images/chevron-right.svg";
import logout from "../../assets/svg_&_images/logout.png";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [user, setUser] = useState({ name: "", email: "", address: "" }); // ✅ Ensures no undefined error
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/${id}`
        );
        setUser(response.data); // ✅ Properly update state
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("userId"); // ✅ Clear stored ID
    toast.success("Logged out successfully!", { position: "top-right" });
    navigate("/user/sign-in"); // ✅ Redirect to login
  };

  const userId = localStorage.getItem("userId")?.replace(/"/g, "");

  return (
    <>
      <Header />
      <Navbar />

      {userId ? (
        <div>
          <div style={{ marginTop: "10px" }} className="row ">
            {/* left component */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 ">
              <div className="container">
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
                        Hello,
                        <br />
                        <span style={{ fontWeight: "bold" }}>{user.name}</span>
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
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
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
                            My Orders{" "}
                          </h5>
                          <Link to="/user/orders">
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
                      <hr />
                    </li>

                    <li>
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
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

                        <div className="col-lg-9 col-md-9 col-sm-9 col-9 ">
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
                              <Link to={`/user/${userId}`}>
                                Profile information
                              </Link>
                            </li>
                            <li style={{ marginTop: "12px" }}>
                              <Link to={`/update/user/${user._id}`}>
                                Manage address
                              </Link>
                            </li>
                            <li style={{ marginTop: "12px" }}>
                              <Link>Reviews</Link>
                            </li>
                            <li style={{ marginTop: "12px" }}>
                              <Link to="/cart">My Cart</Link>
                            </li>
                            <li style={{ marginTop: "12px" }}>
                              <Link>Wishlists</Link>
                            </li>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </li>

                    <li>
                      <div style={{ marginBottom: "10px" }} className="row">
                        <div className="col-lg-3 col-sm-3 col-3">
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
                        <div className="col-lg-9 col-sm-9 col-3 d-flex">
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
            </div>

            {/* right component */}
            <div className="col-lg-9 col-sm-9">
              <div className="container">
                <div style={{ backgroundColor: "white" }} className="row">
                  <div className="personal-details m-4 d-flex flex-wrap justify-content-between">
                    <div>
                      <h5 style={{ fontWeight: "bold" }}>
                        Personal Information:
                      </h5>
                      <input
                        style={{ cursor: "not-allowed" }}
                        type="text"
                        placeholder={user.name}
                        disabled
                      />
                    </div>

                    <div>
                      <Link
                        style={{ marginRight: "50px", width: "60%" }}
                        className="btn btn-outline-primary"
                        to={`/update/user/${user._id}`}
                      >
                        <i className="fa-solid fa-pen-to-square" />
                        Edit
                      </Link>
                    </div>
                  </div>

                  <div className="personal-details mx-4">
                    <p>Gender: </p>
                    <input
                      style={{ cursor: "not-allowed" }}
                      type="text"
                      placeholder={user.gender}
                      disabled
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: "white" }} className="row">
                  <div
                    style={{ marginTop: "55px" }}
                    className="personal-details mx-4"
                  >
                    <h5 style={{ fontWeight: "bold" }}>Email Address: </h5>
                    <input
                      style={{ cursor: "not-allowed" }}
                      type="text"
                      placeholder={user.email}
                      disabled
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: "white" }} className="row">
                  <div className="personal-details m-4">
                    <h5 style={{ fontWeight: "bold" }}>Mobile Number: </h5>
                    <input
                      style={{ cursor: "not-allowed" }}
                      type="text"
                      placeholder={user.phone}
                      disabled
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: "white" }} className="row">
                  <div className="personal-details m-4">
                    <h5 style={{ fontWeight: "bold" }}>Address: </h5>
                    <input
                      id="custom-address"
                      style={{ cursor: "not-allowed" }}
                      type="text"
                      placeholder={user.address}
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
            no User signed in , please sign in first{" "}
            <Link to="/user/sign-in">Sign In</Link>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default User;
