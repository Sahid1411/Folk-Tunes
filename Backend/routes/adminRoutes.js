import express from "express";
import { create, getAdmin, getAdminById, GetLoggedInAdminDetails, LoginAdmin, LogoutAdmin, update } from "../controllers/adminController.js";
import fetchAdmin from "../middleware/fetchAdmin.js";

const route = express.Router();

route.post("/admin", create);
route.get("/admin",getAdmin);  
route.put("/admin/update/:id",update);

route.get("/admin/:id",getAdminById);
route.post("/admin/login",LoginAdmin);
route.post("/admin/logout",LogoutAdmin);
 
route.post("/admin/auth/getAdmin",fetchAdmin,GetLoggedInAdminDetails)

export default route;  