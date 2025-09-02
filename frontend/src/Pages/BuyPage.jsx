import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Popular_items from "../components/Popular_Items/Popular_items";
import toast from "react-hot-toast";
  
import "../Css/BuyPage.css"  
    
function BuyPage(props){  

    const { productId } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProduct();
    }, [productId]);

    // Function to add product to cart
    const addToCart = async () => {
    const userId = localStorage.getItem("userId")?.replace(/"/g, ""); 

    if (!userId) {
        alert("Please log in to add items to your cart.");
        return;
    }

    try {
        const response = await axios.post("http://localhost:4000/api/cart/add", { userId, productId });
        console.log("Cart response:", response.data);
        toast.success("Product added to cart successfully", { position: "top-right" });
        navigate("/cart");
    } catch (error) {
        console.error("Error adding product to cart:", error);
    }
};


    if (!product) return <p>Loading...</p>;


    return (
        <div>
            <Header />
            <Navbar />
            <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 col-sm-4 col-12 ">
                    
                    <img style={{width:'100%'}} className="product-img" src={`http://localhost:4000${product.photo}`} alt={product.name} />                    
                   
                    {/* buy and add to cart button component */}
                    <div className="d-flex  justify-content-between">
                        <div>
                            
                        </div>

                        <div>
                            <button style={{borderRadius:'8px',margin:'10px 0px'}} className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                    
                </div>

                <div className="col-lg-8 col-sm-8 col-12 ">
                    {/* product details component */}
                    <div>
            
                        <p className="p-3"><span style={{ fontWeight: "bold" }}>{product.name}</span> - {product.description}</p>

                        <div className="d-flex">
                            <p className="p-2"><span style={{ fontWeight: "bold" }}>₹</span> {product.price}</p>

                            <p className="p-2" style={{textDecoration:"line-through",color:"lightblue"}}>₹1,299</p>
                            <p className="p-2 text-warning" >45% off</p>
                        </div>
                    </div> 
                        
                    {/* Specifications component */}
                    <div className="container">
                        <div className="row border p-3">
                            <h3 className="border p-3">Specifications</h3>               

                            {/* data in tabular format */}
                            <table id='custom-para' >
                                <tr >
                                    <td>{product.brand ? <p>Brand</p> : null}</td>
                                    <td>{product.brand ? <p>{product.brand}</p> : null}</td>
                                </tr>
                                <tr>
                                    <td><p>Model Number</p></td>
                                    <td><p>{productId}</p></td>
                                </tr>
                                <tr>
                                    <td>{product.string_material ? <p>String Material</p> : null}</td>
                                    <td>{product.string_material ? <p>{product.string_material}</p> : null}</td>
                                </tr>
                                <tr>
                                    <td>{product.number_of_main_string ? <p>Number of Main Strings</p> : null}</td>
                                    <td>{product.number_of_main_string ? <p>{product.number_of_main_string}</p> : null}</td>
                                </tr>
                                <tr>
                                    <td>{product.number_of_sympathetic_string ? <p>Number of Sympathetic Strings</p> : null}</td>
                                    <td>{product.number_of_sympathetic_string ? <p>{product.number_of_sympathetic_string}</p> : null}</td>
                                </tr>
                                <tr>
                                    <td>{product.color ? <p>Color</p> : null}</td>
                                    <td>{product.color ? <p>{product.color}</p> : null}</td>
                                </tr>
                                <tr>
                                    <td><p>Category</p></td>
                                    <td><p>{product.category}</p></td>
                                </tr>
                                <tr>
                                    <td><p>Description</p></td>
                                    <td><p>{product.description}</p></td>
                                </tr>
                            </table>
                            {/* end  */}

                        </div>
                    </div>

                </div>
            </div>
        </div>
            <Popular_items />
            <Footer />
        </div>

    );
} 

export default BuyPage;