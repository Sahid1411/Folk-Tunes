import React from "react";
import bodo_1 from "../assets/bodo/serja-bodo.jpg"
import about_icon_1 from "../assets/svg_&_images/about-icons-1.svg"
import about_icon_2 from "../assets/svg_&_images/about-icons-2.svg"
import about_icon_3 from "../assets/svg_&_images/about-icons-3.svg"

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ParagraphCard from "../components/About/ParagraphCard";

import "../Css/About.css"

function AboutPage(){
    return (
        <div>          
            <Header />
            <Navbar />
            
            <div className="container">
                <div className="p-3 m-2  flex justify-center items-center h-full">
                    <h1 style={{textAlign:"center"}}>About Us</h1>
                </div>
            </div>

            <ParagraphCard about="Welcome to Folk Tunes, where the timeless beauty of traditional folk music comes alive. Our mission is to preserve and promote the rich heritage of folk instruments from across the world. We believe that music is a universal language that connects people, cultures, and generations."/>

            <ParagraphCard about="Each instrument in our collection is carefully selected, ensuring authenticity, quality, and craftsmanship. Whether you're a professional musician, a music enthusiast, or someone looking to explore new sounds, Folk Tunes offers a unique variety of instruments to enrich your musical experience. " />

            <ParagraphCard about="Join us in celebrating the soulful tunes of tradition and make music that resonates with history and heart." />

            <ParagraphCard about="Our passion for folk music drives us to source instruments from skilled artisans who have mastered their craft over generations. At Folk Tunes, we prioritize customer satisfaction and strive to provide you with not only quality products but also a seamless shopping experience. With every purchase, you're not just buying an instrument—you're embracing a piece of cultural history. Thank you for being a part of our journey in keeping the spirit of folk music alive." />
           
           <div style={{height:"30px"}} className="my-4  ">
                <div className="container">
                    <hr />
                </div>
           </div>
          <Footer />
        </div>
    );

}

export default AboutPage;
