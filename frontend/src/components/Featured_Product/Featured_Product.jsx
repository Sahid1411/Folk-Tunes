import React, { useEffect, useState } from "react";
import "../../Css/Featured_Product.css";
import customers_icon from "../../assets/svg_&_images/customer.png";
import CreateCategoryCard from "./CreateCategoryCard";
import data from "./data";
import axios from "axios";
import DuplicateCard from "./DublicateCard"; // ✅ Corrected Import

function createEntry(dataEntry) {
  return <CreateCategoryCard key={dataEntry.name} img={dataEntry.imgURL} name={dataEntry.name} />;
}

function Featured_Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products/featured");
        setProducts(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (   
    <div className="my-4">
      <div className="container">
        <div className="row">
          {/* Sidebar */}  
          <div id='hide-category' className="col-lg-3 col-md-4 col-sm-12 my-2 customHeight">
            <div className="text-center my-3">
              <h4>Categories</h4>
            </div>
            {data.map(createEntry)}

            <div className="text-center my-3">
              <h5>Support</h5>
            </div>
            <CreateCategoryCard img={customers_icon} name="Support Ticket" />
            <CreateCategoryCard img={customers_icon} name="Help Center" />
            <CreateCategoryCard img={customers_icon} name="How FolkTunes Works?" />
          </div>

          {/* Main Content */}
          <div className="col-lg-9 col-md-8 col-sm-12">
            <h1 className="m-3 text-center">Featured Item</h1>
            <div className="row">
              {products.map((product) => (
                <DuplicateCard
                  key={product._id}
                  imgURL={product.photo} // Ensure this is the correct field in your database
                  name={product.name}
                  des={product.description}
                  price={`₹${product.price}`}
                  productId={product._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured_Product;
