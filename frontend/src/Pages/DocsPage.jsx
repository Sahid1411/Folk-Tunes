import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Docs from "../components/Docs/Docs";
import Footer from "../components/Footer/Footer";

function DocsPage(){
    return (
        <div>
            <Header />
            <Navbar />
            <Docs />
            <Footer />
        </div>
    );  
}

export default DocsPage;