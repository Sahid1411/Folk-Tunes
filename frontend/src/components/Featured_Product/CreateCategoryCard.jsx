import React from "react";
import {Link} from "react-router-dom";

function CreateCategoryCard(props){
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 p-2 m-0 d-flex">
            <img style={{height:"20px",width:"20px",margin: "8px 8px"}} src={props.img} alt="cart-svg" />
            <p className="text-success" style={{margin: "6px 0px 6px 15px "}}>{props.name}</p>   

        </div>
    );   
}

export default CreateCategoryCard;