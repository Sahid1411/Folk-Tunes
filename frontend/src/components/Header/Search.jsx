import React, { useState } from "react";
import search_icon from "../../assets/svg_&_images/search-icon.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Search() {
  const [productName, setProductName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/api/search", {
        name: productName, // Fixing request body
      });
      
      const productId = response.data.id;  
      navigate(`/buypage/${productId}`);  

    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          aria-label="Search"
        />
        <button className="btn border" type="submit">
          <img style={{ height: "20px", width: "20px" }} src={search_icon} alt="search-icon" />
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default Search;
