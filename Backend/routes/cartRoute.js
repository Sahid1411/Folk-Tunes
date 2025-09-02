import express from "express"
import Cart from "../models/CartModel.js";
import Products from "../models/productModel.js"
import mongoose from "mongoose";

const route = express.Router();
 
// Add product to cart
route.post("/cart/add", async (req, res) => {
    try {
        console.log("Received request at /cart/add with data:", req.body);

        const { userId, productId } = req.body;

        if (!userId || !productId) {
            console.log("Missing userId or productId");
            return res.status(400).json({ message: "Missing userId or productId" });
        }

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [{ productId, quantity: 1 }] });
        } else {
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += 1;
            } else {
                cart.items.push({ productId, quantity: 1 });
            }
        }

        await cart.save();
        console.log("Cart updated successfully:", cart);
        res.status(200).json({ message: "Product added to cart", cart });

    } catch (error) {
        console.error("Error in addProductToCart:", error);
        res.status(500).json({ message: "Error adding to cart", error });
    }
});

    
route.get("/cart/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid userId format" });
        }

        const cart = await Cart.findOne({ userId }).populate("items.productId");
        if (!cart) return res.status(200).json({ items: [] });

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ message: "Error fetching cart", error: error.message });
    }
});
  
route.delete("/cart/remove", async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) return res.status(400).json({ message: "Cart not found" });

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();

        res.status(200).json({ message: "Item removed", cart });
    } catch (error) {
        res.status(500).json({ message: "Error removing item", error });
    }
});


export default route; 
