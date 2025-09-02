import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
    products: [
        {
            name: String,
            price: Number,
            category: String,
            quantity: { type: Number, default: 1 },
            photo: String,
            supplierId: String,
            status: { type: String, default: "on_the_way" } // ✅ Add status field here
        }
    ], 
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
