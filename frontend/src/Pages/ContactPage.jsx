import React from "react";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

function ContactPage(){
    return (
        <div>
            <Header />
            <Navbar />
            <Contact />
        </div>
    );
}

export default ContactPage;