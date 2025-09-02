import React, { useEffect, useState } from "react";
// import "./Update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
       
const UpdateSupplier = () => {
  const [supplier, setSupplier] = useState({ name: "", email: "", address: "", gender: "",phone:"" }); // ✅ Ensures no undefined error
  const navigate = useNavigate();
  const {id} = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  useEffect(() => {   
    const fetchUser = async () => {
      try {  
        const response = await axios.get(`http://localhost:4000/api/suppliers/${id}`);
        setSupplier(response.data); // ✅ Properly update state
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/api/update/supplier/${id}`, supplier);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/supplier");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update Supplier!");
    }
  };
      
  return (
    <div className="addUser">
      <Link to={`/supplier/${id}`} type="button" className="btn btn-secondary">
        <i style={{marginRight:"4px"}} className="fa-solid fa-backward"></i> Back
      </Link>
  
      <h3>Update Supplier</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        {/* Name */}
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={supplier.name || ""} // ✅ Ensures controlled input
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>

        {/* Email */}
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={supplier.email || ""}
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>

        {/* Gender */}
        <div className="inputGroup">
          <label htmlFor="address">Gender:</label>
          <input
            type="text"
            id="address"
            value={supplier.gender || ""}
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Gender"
          />
        </div>

        {/* Phone */}
        <div className="inputGroup">
         <label htmlFor="address">Phone:</label>
            <input
              type="number"
              id="phone"
              name="phone" // ✅ Changed from id to name
              value={supplier.phone || ""} // ✅ Controlled input
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter Your Phone no."
              required
            />
         </div>

         {/* Address */}
         <div className="inputGroup">
         <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address" // ✅ Changed from id to name
              value={supplier.address || ""} // ✅ Controlled input
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter Your Address"
              required
            />
          </div>



        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSupplier;
