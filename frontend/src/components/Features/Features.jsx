import React from "react";
import box_svg from "../../assets/svg_&_images/box.svg"
import gift_svg from "../../assets/svg_&_images/gift.svg"
import easy_return from "../../assets/svg_&_images/return.svg"
import clock_svg from "../../assets/svg_&_images/clock-svg.svg"
import "../../Css/Features.css"
import FeatureCard from "./FeatureCard";


function Features(){
    return (
        <div className="container my-5">
            {/* <h1>Our Features</h1> */}
            <div className="row">
                
                <FeatureCard img={clock_svg} name="Fast Delivery" details="Get your favorite products delivered to your doorstep quickly, ensuring convenience and satisfaction every time."/>
                
                <FeatureCard img={box_svg} name="Large Variety" details="Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories."/>
                
                <FeatureCard img={gift_svg} name="Affordable Price" details="Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers."/>
                <FeatureCard img={easy_return} name="Easy Return" details="Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy."/>             
                

            </div>
        </div>
    );
}
export default Features;