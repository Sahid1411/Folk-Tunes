import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";


function BodoCart({ imgURL, name, des, price, productId }) { // Destructure props properly
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className="card mb-4">
                <img className="tribe-image" src={`http://localhost:4000${imgURL}`} alt={name} />
                <div className="details">
                    <p> <span style={{ fontWeight: "bold" }}>{name}</span> - {des} </p>
                    <div className="d-flex justify-content-between">
                        <p style={{ fontWeight: "bold" }}>{price}</p>
                        <button style={{ backgroundColor: "#0aad0a" }} type="button" className="btn btn-outline-primary hover btn-buy">
                            <Link
                            style={{ textDecoration: "none" }} className="text-light" to={`/buypage/${productId}`}>Buy</Link>
                        </button>
                    </div>
                </div>
            </div>     
        </div>
    );
}

function SonowalKachariPage(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/products/category/sonowal kachari"); // Use correct category
                setProducts(response.data);
                console.log("Fetched Products:", response.data); // Log the response data
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchData();
    }, []);  

    return (
        <div>
            <Header />
            <Navbar />
            <div className="container">
                <h2 style={{textAlign:"center"}}>Sonowal Kachari</h2>
                <div className="row">
                {products.map((product, index) => (
                        <BodoCart
                            key={product._id} // Add key prop
                            imgURL={product.photo}// Proper base64 image handling
                            name={product.name}
                            des={product.description}
                            price={`₹${product.price}`} // Format price properly
                            productId={product._id}  // Pass the product ID
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default SonowalKachariPage;