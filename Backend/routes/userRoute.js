import express from "express";
import fetchUser from "../middleware/fetchUser.js";

import {  create, deleteUser, getAllUsers, GetLoggedInUserDetails, getUserById, LoginUser, update } from "../controllers/userController.js";

const route = express.Router(); 

route.post("/user", create); 
route.get("/users",getAllUsers);  
route.get("/users/:id",getUserById);
route.put("/update/user/:id",update);
route.delete("/delete/user/:id",deleteUser);

route.post("/user/login",LoginUser);
route.post("/user/auth/getUser",fetchUser,GetLoggedInUserDetails)

 
export default route; 


     


  