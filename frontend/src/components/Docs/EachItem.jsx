import React from "react";


function EachItem(props){  
    return (
        <div className="container my-3">
            <div style={{borderRadius:"15px"}} className="row border border-warning">
                
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">                    
                  <h2 className="p-3" style={{color:"rgb(10, 173, 10)"}}>{props.name}</h2>
                   <div className="p-3">
                     <p>{props.para1}</p>
                     <p>{props.para2}</p>

                   </div>

                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12  d-flex justify-content-center align-items-center">
                    <img id="custom-img" src={props.img} alt="guitar-img" />
                </div>

            </div>
        </div>
    );
}
export default EachItem;