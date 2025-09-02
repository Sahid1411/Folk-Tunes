import React from "react";
import "../../Css/Contact.css"
import sign_in from "../../assets/svg_&_images/sign-in.svg" 

function Contact(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6  d-flex justify-content-center align-items-center">                        
                    <img style={{height:"100%"}} src={sign_in} alt="sign-in image" />
                </div>      

                <div className="col-lg-6 py-3">

                    <div>
                        <h2 className="text-center">Contact Us</h2>
                    </div>

                <form>
                    <div className="d-flex justify-content-center ">
                        <label htmlFor="name"></label>
                        <input className="custom-input" type="text" id="name" placeholder="Name" required />
                    </div>                                
                    
                    
                    <div className="d-flex justify-content-center">
                        <label htmlFor="email"></label>
                        <input className="custom-input" type="email" id="email" placeholder="Email" required/>                    
                    </div>

                    <div className="d-flex justify-content-center">
                        <label htmlFor="phone"></label>
                        <input className="custom-input" type="phone" id="phone" placeholder="Phone Number" required/>                    
                    </div>

                    <div className="d-flex justify-content-center">
                        <label htmlFor="description"></label>
                        <textarea style={{height:"100px"}} className="custom-input" name="description" id="description"  placeholder="Enter the Description"/>               
                    </div>

                    

                    <div className="d-flex justify-content-center">                               
                        <input style={{color:"white",backgroundColor:"#0aad0a",width:"400px",borderRadius:"6px",height:"40px"}}  className="hover" type="button" value="Submit" id="submit" />                    
                    </div>

                    
                </form>
                </div>
            </div>
        </div>
    ) ;  

}

export default Contact;