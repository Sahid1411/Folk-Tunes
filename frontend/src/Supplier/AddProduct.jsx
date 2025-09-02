import React, { useState } from "react";
import "./AddProduct.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    photo: null, 
    brand: "",
    string_material: "",
    number_of_main_string: "",
    color: ""
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const fileHandler = (e) => {
    setProduct({ ...product, photo: e.target.files[0] });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const supplierId = localStorage.getItem("supplierId")?.replace(/"/g, ""); // Fetch supplierId

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("price", product.price);
    formData.append("photo", product.photo);
    formData.append("brand", product.brand);
    formData.append("string_material", product.string_material);
    formData.append("number_of_main_string", product.number_of_main_string);
    formData.append("color", product.color);
    formData.append("supplierId", supplierId); // Add supplierId automatically


    try {
      const response = await axios.post(
        "http://localhost:4000/api/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.message, { position: "top-right" });
      navigate(`/supplier/${supplierId}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!", { position: "top-right" });
    }
  };

  
  const supplierId = localStorage.getItem("supplierId")?.replace(/"/g, ""); 

  return (
    <div className="addUser">
      <Link
        style={{ textDecoration: "none" }}
        type="button"
        className="btn btn-secondary"
        to={`/supplier/${supplierId}`}
      ><i style={{marginRight:"4px"}} className="fa-solid fa-backward"></i>
        Back
      </Link>

      <h3>Add Product</h3>
      <form className="addUserForm" onSubmit={submitForm} encType="multipart/form-data">
        
        {/* Input name  */}
        <div className="inputGroup">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Product Name"
            required
          />
        </div>

         {/* Input category  */}
        <div className="inputGroup">
          <label htmlFor="category">Product Category:</label>
          <select
              name="category"
              id="category"  
              value={product.category}
              onChange={inputHandler}
              required
            >
              <option value="">Select Category</option> {/* Add a default empty option */}
              <option value="bodo">Bodo</option>
              <option value="mishing">Mishing</option>
              <option value="tiwa">Tiwa</option>
              <option value="sonowal kachari">Sonowal Kachari</option>
              <option value="rabha">Rabha</option>
              <option value="karbi">Karbi</option>
            </select>
        </div>

        

        {/* Input Price  */}
        <div className="inputGroup">
          <label htmlFor="price">Product Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Product Price"
            required
          />
        </div>

        {/* Input Brand  */}
        <div className="inputGroup">
          <label htmlFor="price">Product Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Product Brand name"
            // required
          />
        </div>

         {/* Input String material  */}
         <div className="inputGroup">
          <label htmlFor="price">Material: </label>
          <input
            type="text"
            id="string_material"
            name="string_material"
            value={product.string_material}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Product String Material"
            // required
          />
        </div>

        {/* Input String material  */}
        <div className="inputGroup">
          <label htmlFor="price">Main  String: </label>
         
            <input
            type="number"
            id="number_of_main_string"
            name="number_of_main_string"
            value={product.number_of_main_string}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Number of Main String"
            // required
          />
        </div>

        {/* Input Color */}
        <div className="inputGroup">
          <label htmlFor="price">Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            value={product.color}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter the color"
            // required
          />
        </div>

        {/* Input description  */}
        <div className="inputGroup">
          <label htmlFor="description">Product Description:</label>
          <textarea className="p-3"
            id="description"
            name="description"
            value={product.description}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter Product Description"
            required
          />
        </div>

   

        {/* Input Photo  */}
        <div className="inputGroup">
          <label htmlFor="photo">Upload Image:</label>
          <input type="file" id="photo" name="photo" onChange={fileHandler} required />
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

export default AddProduct;