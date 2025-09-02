import React, { useState } from "react";
import "../../Css/Sign_up.css";
import sign_up from "../../assets/svg_&_images/sign-up.svg";
import Header from ".././Header/Header";
import Navbar from ".././Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"; // ✅ Import toast if using react-toastify

function Admin_sign_up() {
  const admins = {
    name: "",
    email: "",
    password: "",
  };

  const [admin, setAdmin] = useState(admins);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin",
        admin
      );
      toast.success(response.data.message, { position: "top-right" }); // ✅ Ensure react-toastify is used correctly
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Admin already exists!", { position: "top-right" });
    }
  }; 

  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center">
            <img id="image-height" src={sign_up} alt="sign-up" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12 py-3">
            <h2>Get Started Shopping</h2>
            <p>Welcome to Folk Tunes! Enter your details to get started.</p>

            <form className="addUserForm" onSubmit={submitForm}>
              {/* Name */}
              <div className="d-flex justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="text"
                  id="name"
                  onChange={inputHandler}
                  name="name" // ✅ Changed from id to name
                  value={admin.name} // ✅ Controlled input
                  autoComplete="off"
                  placeholder="Enter Your Username"
                  required
                />
              </div>

              {/* Email */}
              <div className="d-flex justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="email"
                  id="email"
                  name="email" // ✅ Changed from id to name
                  value={admin.email} // ✅ Controlled input
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              {/* Password */}
              <div className="d-flex justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="password"
                  id="password"
                  name="password" // ✅ Changed from id to name
                  value={admin.password} // ✅ Controlled input
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-start">
                <button
                  style={{ backgroundColor: "#0aad0a" }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_sign_up;
