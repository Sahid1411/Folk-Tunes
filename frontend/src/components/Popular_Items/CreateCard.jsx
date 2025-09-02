import React from "react";
import {Link} from "react-router-dom";
  
function CreateCard(props){
    return (
        <>   
        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
            <div className="card mb-5">
                <img className="tribe-image" src={props.img} alt="card-img" />
                <div  className="details">

                    <p> <span style={{fontWeight:"bold"}}>{props.name}</span>- {props.des}</p>

                    <div className="d-flex justify-content-between">
                        <p style={{fontWeight:"bold"}}>{props.price}</p>

                        <button style={{backgroundColor:"#0aad0a"}} type="button"  className="btn btn-outline-primary hover btn-buy" id="">
                            <Link style={{textDecoration:"none"}} className="text-light " to="/buypage">Buy</Link>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default CreateCard;