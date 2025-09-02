import React from "react";
import bodo_1 from "../../assets/bodo/serja-bodo.jpg"
import about_icon_1 from "../../assets/svg_&_images/about-icons-1.svg"
import about_icon_2 from "../../assets/svg_&_images/about-icons-2.svg"
import about_icon_3 from "../../assets/svg_&_images/about-icons-3.svg"
import "../../Css/About.css"
import AboutCard from "./AboutCard";
import Hero from "./Hero";
import ParagraphCard from "./ParagraphCard";


function About(){
    return (
        <div>          

            {/*about hero component */}
            <Hero img={bodo_1}/>

            <section className="container">
                <h2>Ready to get started?</h2>
                    <div className="row">

                        {/* about card component  */}
                        <AboutCard img={about_icon_1}/>
                        <AboutCard img={about_icon_2}/>
                        <AboutCard img={about_icon_3}/>                 

                    </div>

                <p style={{margin:"20px 0px"}}> For assistance using Freshcart services, please visit our <a className="text-success" href="/">Help Center</a></p>

                {/* ParagraphCard component */}
                <ParagraphCard />
                <ParagraphCard />
                                
            </section>
          
        </div>
    );

}

export default About;