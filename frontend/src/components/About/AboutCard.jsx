import React from "react";

function AboutCard(props){
    return (

        <div className="col-4 ">
            <div style={{backgroundColor:"#f0f3f2"}} className="card">
                <img className="custom-img"  src={props.img} />

                <div className="card-body px-5">
                <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-color-custom">Go somewhere</a>
                </div>
            </div>
        </div>
     
    );
}

export default AboutCard;