import React, { useEffect, useState } from 'react'
import "./AddProduct.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";

const UpdateProduct = () => {

        
      const [product, setProduct] = useState({ name: "", category: "", 
        description: "", price: "" ,photo: null,brand: "", string_material: "",
        number_of_main_string: "",color: ""}); 

      const navigate = useNavigate();
      const {id} = useParams();
    
      const inputHandler = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };

      const fileHandler = (e) => {
        setProduct({ ...product, photo: e.target.files[0] });
      };
    

      useEffect(() => { 
        const fetchProduct = async () => {
          try {  
            const response = await axios.get(`http://localhost:4000/api/products/${id}`);
            setProduct(response.data); // ✅ Properly update state
          } catch (error) {
            console.log("Error fetching user:", error);
          }
        };
    
        fetchProduct();
      }, [id]);


      const submitForm = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.put(`http://localhost:4000/api/update/product/${id}`, product);
          toast.success(response.data.message, { position: "top-right" }); // ✅ Ensure react-toastify is used correctly
          navigate("/supplier");
        } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("Something went wrong!", { position: "top-right" });
        }
      };


  
  return (
    <div className='addUser'>
      <Link  className='btn btn-secondary' to='/supplier/products'><i style={{marginRight:"4px"}} className="fa-solid fa-backward"></i>Back</Link>
        <h3>Update Product</h3>
        <form className="addUserForm"  onSubmit={submitForm}>

        {/* Product Name */}
        <div className="inputGroup">
            <label htmlFor="name">Product Name:</label>
            <input 
                type="text" 
                id="name" 
                onChange={inputHandler}
                name="name" 
                value={product.name || ""} 
                autoComplete="off" 
                placeholder="Enter your Product name" 
                required
            />
        </div>

         {/* Product Category */}
         <div className="inputGroup">
            <label htmlFor="description">Product Category:</label>
            <select name="category" id="category" value={product.category} onChange={inputHandler} required>
              <option value="bodo">Bodo</option>
              <option value="mishing">Mishing</option>
              <option value="tiwa">Tiwa</option>
              <option value="rabha">Rabha</option>
              <option value="karbi">Karbi</option>
            </select>
        </div>

        {/* Product Price */}
        <div className="inputGroup">
            <label htmlFor="price">Product Price:</label>
            <input 
                type="text" 
                id="price" 
                name="price"
                value={product.price || ""} 
                onChange={inputHandler} 
                autoComplete="off" 
                placeholder="Enter your Product Price" 
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
        {/* <div className="inputGroup">
          <label htmlFor="photo">Upload Image:</label>
          <input type="file" id="photo" name="photo"  onChange={fileHandler} required />
        </div> */}

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

        </form>

    </div>
  )
}

export default UpdateProduct
