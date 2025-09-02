import Order from "../models/orderModel.js"
import mongoose from "mongoose";

// Create a new order
export const createOrder =  async (req, res) => {
    try {
        const { userId, products } = req.body;

        const newOrder = new Order({
            userId,
            products  
        });

        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
};  

// Get all orders for a user
export const getAllOrders =  async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId }).sort({ createdAt: -1 });

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }   
};
  
//get all orders by filtering year
export const getOrdersByYear = async (req, res) => {
    try {
        const { userId } = req.params;
        const { year } = req.query;

        let filter = { userId };

        if (year) {
            const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
            const endDate = new Date(`${year}-12-31T23:59:59.999Z`);
            filter.createdAt = { $gte: startDate, $lte: endDate };
        }

        console.log(`Fetching orders for User ID: ${userId}, Year: ${year}`);

        const orders = await Order.find(filter).sort({ createdAt: -1 });

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
};
   
// Update order status route
export const UpdateOrderStatus = async (req, res) => {
    try {
        const { orderId, productId, status } = req.body;
        console.log("Received data:", req.body);

        // Convert orderId and productId to ObjectId
        const orderObjectId = new mongoose.Types.ObjectId(orderId);
        const productObjectId = new mongoose.Types.ObjectId(productId);

        // Update the specific product's status inside the products array
        const updatedOrder = await Order.findOneAndUpdate(
            { _id: orderObjectId, "products._id": productObjectId },
            { $set: { "products.$.status": status } },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order or product not found" });
        }

        res.status(200).json({ message: "Product marked as delivered", order: updatedOrder });
    } catch (error) {
        console.error("Error updating product status:", error);
        res.status(500).json({ message: "Error updating product status", error });
    }
};









