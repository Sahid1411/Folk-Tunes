import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoute.js"; // Change variable name
import supplierRoutes from "./routes/supplierRoutes.js"
import adminRoute from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(express.json());  // 🚀 This is required to parse JSON data
app.use(cors());
dotenv.config();

// Serve static files from the uploads folder
app.use("/uploads", express.static("uploads"));
 
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;
  
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

// ✅ Use both product and user routes
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", supplierRoutes);
app.use("/api",adminRoute);
app.use("/api",cartRoute);
app.use("/api",orderRoute);

  
