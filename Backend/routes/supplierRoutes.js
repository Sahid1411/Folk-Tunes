import express from "express";

import {  create, deleteSupplier, getAllSupplier, GetLoggedInSupplierDetails, getOrdersBySupplier, getSupplierById, LoginSupplier, update  } from "../controllers/supplierController.js";
import fetchSupplier from "../middleware/fetchSupplier.js";


const route = express.Router();

route.post("/supplier", create);
route.get("/suppliers",getAllSupplier);  
route.get("/suppliers/:id",getSupplierById);
route.put("/update/supplier/:id",update);
route.delete("/delete/supplier/:id",deleteSupplier);

route.post("/supplier/login",LoginSupplier);
route.post("/user/auth/getSupplier",fetchSupplier,GetLoggedInSupplierDetails)

route.get("/orders/supplier/:supplierId", getOrdersBySupplier);  

 
export default route; 



  

