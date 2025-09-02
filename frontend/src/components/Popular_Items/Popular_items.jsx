import React , { useEffect, useState } from "react";
import axios from "axios"
import { use } from "react";
import { Link } from "react-router-dom";

function CreateCard({ imgURL, name, des, price, productId }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
            <div className="card mb-5">
                <img className="tribe-image" src={`http://localhost:4000${imgURL}`} alt={name} />
                <div className="details">
                    <p><span style={{ fontWeight: "bold" }}>{name}</span> - {des}</p>
                    <div className="d-flex justify-content-between">
                        <p style={{ fontWeight: "bold" }}>{price}</p>
                        <button style={{ backgroundColor: "#0aad0a" }} type="button" className="btn btn-outline-primary hover btn-buy">
                            <Link style={{ textDecoration: "none" }} className="text-light" to={`/buypage/${productId}`}>Buy</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

   
function Popular_items(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async()=> {  
            try {

                const response =  await axios.get("http://localhost:4000/api/products/popular")
                setProducts(response.data)
                console.log(products);

            }catch(error) {
                console.log("Error while fetching data", error)
            }
        };
        fetchData()
    }, [])  

 
    return (
        <div className="container">
            <h1 style={{margin:"18px"}}>Popular Items</h1>
            <div className="row">

            {/* This is bakend code where the data are coming from the databse but not the image  */}
            {products.map((product) => (
            <CreateCard
                key={product._id}
                imgURL={product.photo} // Ensure this is the correct field in the database
                name={product.name}
                des={product.description}  
                price={`₹${product.price}`}
                productId={product._id}
            />
        ))}                  
                          
            </div>
        </div>
    );
}

export default Popular_items;