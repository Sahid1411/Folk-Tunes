import express from "express";
import { createOrder, getAllOrders, getOrdersByYear, UpdateOrderStatus } from "../controllers/orderController.js";

const route = express.Router();
 
route.post("/create/order",createOrder);
route.get("/orders/:userId",getAllOrders);
route.get("/getOrders/:userId",getOrdersByYear);
route.put("/orders/updateStatus",UpdateOrderStatus)

export default route;        