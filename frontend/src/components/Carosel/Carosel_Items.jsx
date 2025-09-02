import React from "react";
import { Link } from "react-router-dom";

function Carosel_Items(props) {
  const activeClass = props.isActive ? "active" : ""; // Add active conditionally
  return (
    <>
      <div className={`carousel-item ${activeClass} border-black`}>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
            <div className=" col-sm-6  col-lg-6 col-12">
              <img
                style={{ height: "325px", width: "75%" }}
                src={props.img}
                className="d-block mx-lg-auto img-fluid"  
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </div>  

            <div className="col-lg-6 col-sm-6 col-12">
              <h2 id='custom-heading' className="display-5 fw-bold text-body-emphasis lh-1 mb-5">
                Authentic Traditional Musical Instruments
              </h2>

              <p id='custom-para' className="lead">
                At Folk Tunes, we bring the rich sounds of tradition to your
                doorstep. Explore our curated collection of authentic folk
                musical instruments from diverse cultures, crafted with
                precision and passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carosel_Items;
