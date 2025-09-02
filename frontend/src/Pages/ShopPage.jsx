import React from "react"
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Featured_Product from "../components/Featured_Product/Featured_Product";
import Popular_items from "../components/Popular_Items/Popular_items";
import Footer from "../components/Footer/Footer";
function ShopPage(){
    return (
        <div>
            <Header />
            <Navbar />
            <Featured_Product />
            <Popular_items />
            <Footer />
        </div>
    );

}

export default ShopPage;