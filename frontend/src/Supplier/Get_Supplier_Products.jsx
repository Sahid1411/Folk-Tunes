import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "./Get_Supplier_Products.css";

function Get_Supplier_Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (productId) => {
    await axios
      .delete(`http://localhost:4000/api/delete/product/${productId}`)
      .then((response) => {
        setProducts((prevProduct) => prevProduct.filter((product) => product._id !== productId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const supplierId = localStorage.getItem("supplierId")?.replace(/"/g, ""); 

  return (
    <>
    <div id="hideHeaderNavbar">
       <Header />
      <Navbar />      

    </div>
  
      {/* <div className="container product-container"> */}
        {/* <div className="row"> */}
          {/* <div className="col-12"> */}
            <div style={{padding:'8px'}} className="product-card">
              <Link className="btn btn-secondary back-button" to={`/supplier/${supplierId}`}><i style={{marginRight:"4px"}} className="fa-solid fa-backward"></i>Back</Link>
              <h3 className="text-center">Your Added Products</h3>
              {products.length === 0 ? (
                <div className="noData">
                  <h3>No Data to display</h3>
                  <p>Please add new products</p>
                </div>
              ) : (
                <table className="table table-bordered product-table">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                          <Link to={`/updateProduct/${product._id}`} className="btn btn-info action-button">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Link>
                          <button onClick={() => deleteProduct(product._id)} className="btn btn-danger action-button">
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Get_Supplier_Products;
