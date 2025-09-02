import React from "react";
import { Link } from "react-router-dom";

function DuplicateCard({ imgURL, name, des, price, productId }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-6">
      <div className="card mb-4">
        <img className="tribe-image" src={`http://localhost:4000${imgURL}`} alt="card-img" />
        <div className="details">
          <p>
            <span style={{ fontWeight: "bold" }}>{name}</span> - {des}
          </p>
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: "bold" }}>{price}</p>
            <button style={{ backgroundColor: "#0aad0a" }} type="button" className="btn btn-outline-primary hover btn-buy">
              <Link style={{ textDecoration: "none" }} className="text-light" to={`/buypage/${productId}`}>
                Buy
              </Link>
            </button>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default DuplicateCard;
