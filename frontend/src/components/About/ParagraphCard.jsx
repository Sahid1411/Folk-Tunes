import React from "react";

function ParagraphCard(props){
    return (
        <>
            <div className="container">
                <div style={{borderRadius:"20px"}} className=" p-1">
                    <p>{props.about}</p>
                          

                    {/* <p> Each instrument in our collection is carefully selected, ensuring authenticity, quality, and craftsmanship. Whether you're a professional musician, a music enthusiast, or someone looking to explore new sounds, Folk Tunes offers a unique variety of instruments to enrich your musical experience.</p>

                    <p>Join us in celebrating the soulful tunes of tradition and make music that resonates with history and heart.</p>

                    <p>Our passion for folk music drives us to source instruments from skilled artisans who have mastered their craft over generations. At Folk Tunes, we prioritize customer satisfaction and strive to provide you with not only quality products but also a seamless shopping experience. With every purchase, you’re not just buying an instrument—you’re embracing a piece of cultural history. Thank you for being a part of our journey in keeping the spirit of folk music alive.</p> */}

                </div>
            </div>
        
        </>
    );
}
 
export default ParagraphCard;