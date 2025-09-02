import React, { useState } from "react";
import "../Css/Sign_up.css";
import sign_up from "../assets/svg_&_images/sign-up.svg";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"; // ✅ Import toast if using react-toastify
import sell from "../assets/svg_&_images/sell.jpg"
 
function SupplierForm() {


  const suppliers = {
    name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    password: "",
  };   

  const [supplier, setUser] = useState(suppliers);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...supplier, [name]: value });
  };

  //validate form
  const validateForm = () => {
    let newErrors = {};
  
    if (!supplier.name.trim()) newErrors.name = "Name is required";
    if (!supplier.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supplier.email))
      newErrors.email = "Invalid email format";
    
    if (!supplier.gender.trim()) newErrors.gender = "Gender is required";
    if (!supplier.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(supplier.phone))
      newErrors.phone = "Phone number must contain 10 digits";

    if (!supplier.address.trim()) newErrors.address = "Address is required";
    if (!supplier.password.trim()) newErrors.password = "Password is required";
    else if (supplier.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/supplier", supplier);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/");
    } catch (error) {
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
            <img id="image-height" src={sell} alt="sell-image" />
          </div>
 
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 py-3">
            <h2>Get Started Selling</h2>
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
                  value={supplier.name} // ✅ Controlled input
                  autoComplete="off"
                  placeholder="Enter Your Username"
                  required
                /> 
                {errors.name && <small className="text-danger">{errors.name}</small>}

              </div>

              
              {/* Email */}
              <div className="d-flex justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="email"
                  id="email"
                  name="email" // ✅ Changed from id to name
                  value={supplier.email} // ✅ Controlled input
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  required
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}

              </div>
  
              {/* Gender */}
              <div className="d-flex justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="text"
                  id="gender"
                  name="gender" // ✅ Changed from id to name
                  value={supplier.gender} // ✅ Controlled input
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Gender"
                  required
                />
                {errors.gender && <small className="text-danger">{errors.gender}</small>}

              </div>

              {/* Phone */}
              <div className="d-flex flex-column justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="number"
                  id="phone"
                  name="phone" // ✅ Changed from id to name
                  value={supplier.phone} // ✅ Controlled input
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Phone no."
                  required
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}

              </div>


              {/* Address */}
              <div className="d-flex justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="text"
                  id="address"
                  name="address" // ✅ Changed from id to name
                  value={supplier.address} // ✅ Controlled input
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Address"
                  required
                />{errors.address && <small className="text-danger">{errors.address}</small>}

              </div>
              
              {/* Password */}
              <div className="d-flex flex-column justify-content-start">
                <input
                  className="custom-input border border-dark"
                  type="password"
                  id="password"
                  name="password" // ✅ Changed from id to name
                  value={supplier.password} // ✅ Controlled input
                  onChange={inputHandler}
                  autoComplete="off"
                  placeholder="Enter Your Password"
                  required
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}

              </div>



              {/* Submit Button */}
              <div className="d-flex justify-content-start">
                <button style={{backgroundColor:"#0aad0a"}} 
                  type="submit" className="btn btn-primary">
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

export default SupplierForm;
