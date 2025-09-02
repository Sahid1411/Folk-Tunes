import React from "react";
import chevron_left from "../../assets/svg_&_images/chevron-left.svg"
import chevron_right from "../../assets/svg_&_images/chevron-right.svg"

function Chevron_Buttons(){
    return (
        <>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <img style={{height:"10px",width:"20px"}} src={chevron_left} alt="chevron-left" />
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <img style={{height:"10px",width:"20px"}} src={chevron_right} alt="chevron-right" />
            </button>
        </>
    );
}
 
export default Chevron_Buttons;