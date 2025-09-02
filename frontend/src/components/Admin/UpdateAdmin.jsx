import React, { useEffect, useState } from "react";
// import "./Update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateAdmin = () => {
  const [admin, setAdmin] = useState({ name: "", email: "" }); // ✅ Ensures no undefined error
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/admin/${id}` 
        );
        setAdmin(response.data); // ✅ Properly update state
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();  
    try {
      const response = await axios.put(
        `http://localhost:4000/api/admin/${id}`,
        admin
      );
      toast.success(response.data.message, { position: "top-right" });
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update Supplier!");
    }
  };

  return (
    <div className="addUser">
      <Link to={`/admin/${id}`} type="button" className="btn btn-secondary">
        <i style={{ marginRight: "4px" }} className="fa-solid fa-backward"></i>{" "}
        Back
      </Link>

      <h3>Update Admin</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        {/* Name */}
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={admin.name || ""} // ✅ Ensures controlled input
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
            value={admin.email || ""}
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
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

export default UpdateAdmin;
