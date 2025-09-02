import React from "react";
import "../../Css/Sales.css"

function Sales(props){
    return (
        <div className="container">
        <h1>Sales</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 sales-height">
                <img style={{borderRadius: "15px", width: "100%",height: "85%"}} src={props.img1} alt="card-img" />
                </div>

                <div className="col-6  col-lg-6 col-md-6 col-sm-6 col-12 sales-height">                        
                    <img style={{borderRadius: "15px", width: "100%",height: "85%"}} src={props.img2} alt="card-img" />
                </div>
            </div>
        </div>  
    ); 
}

export default Sales;