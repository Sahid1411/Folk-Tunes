import React from "react";
import { RouterProvider , createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/HomePage.jsx";
import Sign_up from "./Sign_up.jsx";
import Admin from "./Admin/Admin.jsx";
import BodoPage from "../Pages/BodoPage.jsx";
import MishingPage from "../Pages/MishingPage.jsx";
import KarbiPage from "../Pages/KarbiPage.jsx";
import RabhaPage from "../Pages/RabhaPage.jsx";
import TiwaPage from "../Pages/TiwaPage.jsx";
import ShopPage from "../Pages/ShopPage.jsx";
import AboutPage from "../Pages/AboutPage.jsx";
import ContactPage from "../Pages/ContactPage.jsx";
import DocsPage from "../Pages/DocsPage.jsx";
import Sign_in from "./Sign_in.jsx";
import Update from "./UpdateUser/Update.jsx";
// import Customer from "./Dashboard/Customer.jsx";
import AddProduct from "../Supplier/AddProduct.jsx";
import UpdateProduct from "../Supplier/UpdateProduct.jsx";
import SupplierForm from "../Supplier/SupplierForm.jsx";
import Supplier_sign_in from "../Supplier/Supplier_sign_in.jsx";
import Supplier from "../Supplier/Supplier.jsx";
import Admin_sign_in from "./Admin/Admin_sign_in.jsx";
import Admin_sign_up from "./Admin/Admin_sign_up.jsx";
import GetProducts from "./Admin/GetProducts.jsx";
import GetSuppliers from "./Admin/GetSuppliers.jsx";
import Get_Supplier_Products from "../Supplier/Get_Supplier_Products.jsx";
import User from "./AddUsers/User.jsx";
import BuyPage from "../Pages/BuyPage.jsx";
import SonowalKachariPage from "../Pages/SonowalKachariPage.jsx";
import UpdateSupplier from "../Supplier/UpdateSupplier.jsx";
import UpdateAdmin from "./Admin/UpdateAdmin.jsx";
import GetUsers from "./Admin/GetUsers.jsx";
import Cart from "./Cart/Cart.jsx";
import Checkout from "./Checkout/Checkout.jsx";
import Order from "./Orders/Order.jsx";
import See_Orders from "../Supplier/See_Orders.jsx";
import Admin_See_Orders from "./Admin/Admin_See_Orders.jsx";

     
const App = () => {

    const route = createBrowserRouter([
 
        // {
        //     path: "/customer/:id",
        //     element: <Customer />
        // },
        
  
        {
            path: "/updateProduct/:id",
            element: <UpdateProduct />
        },

        //user routes
        {
            path: "/user/:id",
            element: <User />
        },

        {
            path: "/update/user/:id",
            element: <Update />
        },
        {
            path: "/user/orders",
            element: <Order />
        },
        
           
        //supplier routes
        {
            path: "/supplier/:id",
            element: <Supplier />
        },
        {
            path: "/supplier/addProduct",
            element: <AddProduct />
        },

        {
            path: "/supplier/products",
            element: <Get_Supplier_Products />
        },

        {
            path: "/update/supplier/:id",
            element: <UpdateSupplier />
        },

        {
            path: "/supplier/get-orders",
            element: <See_Orders />
        },


        // admin routes  
        
        {
            path: "/admin/:id",
            element: <Admin />
        },
        {
            path: "/suppliers",
            element: <GetSuppliers />
        },

        {
            path: "/products",
            element: <GetProducts />
        },
        {
            path: "/getusers",
            element: <GetUsers />
        },

        {
            path: "/admin/update/:id",
            element: <UpdateAdmin /> 
        },

        {
            path: "/admin/get-orders",
            element: <Admin_See_Orders /> 
        },

        
        

        // sign-in 
        {
            path: "/supplier/sign-in",
            element: <Supplier_sign_in />
        },


        {
            path: "/user/sign-in",
            element: <Sign_in />
        },
        {
            path: "/admin/sign-in",
            element: <Admin_sign_in />
        },

        //sign-up   
        {
            path: "/suplier/sign-up",
            element: <SupplierForm />
        },
        {
            path: "/sign-up",
            element: <Sign_up />
        },
        {
            path: "/admin/sign-up",
            element: <Admin_sign_up />
        },



        //pages  
        {
            path: "/",
            element: <HomePage />,
        },       
        {
            path: "/shop",
            element: <ShopPage />
        },
        {
            path: "/about",
            element: <AboutPage />
        },
        {
            path: "/contact",
            element: <ContactPage />
        },
        {
            path: "/docs",
            element: <DocsPage />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        
        {
            path: "/checkout/:id", 
            element: <Checkout />
        },
        {
            path: "/buypage/:productId",
            element: <BuyPage /> //  Dynamic route 
        },
       


        // Category/tribes Page routes 
        {
            path: "/bodo",
            element: <BodoPage />  
        },
        {
            path: "/mishing",
            element: <MishingPage />
        },
        {
            path: "/karbi",
            element: <KarbiPage  />
        },
        {
            path: "/tiwa",
            element: <TiwaPage />
        },
        {
            path: "/rabha",
            element: <RabhaPage />
        },
        {
            path: "/sonowal-kachari",
            element: <SonowalKachariPage />
        },

    ])
   

    return (
        <div>
            <RouterProvider router={route}></RouterProvider>
        </div>
    );
};
 
export default App ;