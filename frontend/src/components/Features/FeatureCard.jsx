import React from "react";

function FeatureCard(props){
    return (
        <>
            <div style={{height:"230px"}} className="col-lg-3 my-3 col-md-3 col-sm-4 col-6">
                <div>
                    <img className="feature-img" src={props.img} alt="" />
                </div>

                <h6>{props.name}</h6>
                <p className="text-success custom-p">{props.details}</p>
            </div>
        
        </>
    )
}

export default FeatureCard;