import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Carosel from '../components/Carosel/Carosel'
import Featured_Product from '../components/Featured_Product/Featured_Product'
import Sales from '../components/Featured_Product/Sales'
import Popular_items from '../components/Popular_Items/Popular_items'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'

import sale_1 from "../assets/svg_&_images/sale-1.jpg"
import sale_2 from "../assets/svg_&_images/sale-2.jpg"
// import Supplier from '../Supplier/Supplier'

const HomePage = () => {
  return ( 
    <div>
        <Header />
        <Navbar />
        <Carosel />
        <Featured_Product />
        <Sales img1={sale_1} img2={sale_2}/>
        <Popular_items />   
        <Features />
        <Footer />   
        
    </div>
  )
}

export default HomePage
