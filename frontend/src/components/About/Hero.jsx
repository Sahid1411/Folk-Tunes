import React from "react";

function Hero(props){
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img style={{width:"432px", height:"400px"}} src={props.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  loading="lazy" />
                </div>

                <div className="col-lg-6 px-3">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our instrument of Folk Music:</h1>
                    <p className="lead">By powering the future of grocery with our retail partners, we give everyone access to the food they love and more time to enjoy it together.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Shop</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;