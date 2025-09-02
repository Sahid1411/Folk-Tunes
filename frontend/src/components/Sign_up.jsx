import React, { useState } from "react";
import "../Css/Sign_up.css";
import sign_up from "../assets/svg_&_images/sign-up.svg";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Sign_up() {
  const initialUser = {
    name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    password: "",
  };

  const [user, setUser] = useState(initialUser);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!user.gender.trim()) {
      newErrors.gender = "Gender is required";
    }

    if (!user.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(user.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!user.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) {  
      toast.error("Please fix the errors before submitting.");
      return;
    }  

    try {
      const response = await axios.post("http://localhost:4000/api/user", user);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!", { position: "top-right" });
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
              <div className="d-flex flex-column">
                <input
                  className="custom-input border border-dark"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={inputHandler}
                  placeholder="Enter Your Username"
                  required
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              {/* Email */}
              <div className="d-flex flex-column">
                <input
                  className="custom-input border border-dark"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={inputHandler}
                  placeholder="Enter Your Email"
                  required
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              {/* Gender */}
              <div className="d-flex flex-column">
                <input
                  className="custom-input border border-dark"
                  type="text"
                  name="gender"
                  value={user.gender}
                  onChange={inputHandler}
                  placeholder="Enter Your Gender"
                  required
                />
                {errors.gender && <small className="text-danger">{errors.gender}</small>}
              </div>

              {/* Phone */}
              <div className="d-flex flex-column">
                <input
                  className="custom-input border border-dark"
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={inputHandler}
                  placeholder="Enter Your Phone No."
                  required
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>

              {/* Address */}
              <div className="d-flex flex-column">
                <input
                  className="custom-input border border-dark"
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={inputHandler}
                  placeholder="Enter Your Complete Address with Pin"
                  required
                />
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>

              {/* Password */}
              <div className="d-flex flex-column">
                <input
                  className="custom-input border border-dark"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={inputHandler}
                  placeholder="Enter Your Password"
                  required
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-start">
                <button style={{ backgroundColor: "#0aad0a" }} type="submit" className="btn btn-primary">
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

export default Sign_up;
