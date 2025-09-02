import express from "express";
import multer from "multer";  
import path from "path";
import Product from "../models/productModel.js";
import { deleteProduct, getAllProducts, getFeaturedProducts, getPopularProducts, 
    getProductsByCategory, getProductsById, SearchProductByName, update } from "../controllers/productController.js";

const route = express.Router();

// Configure multer to store files in 'uploads' folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save images in 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
    }
});  

const upload = multer({ storage });
  
// Create new product and store data in DB
route.post("/product", upload.single("photo"), async (req, res) => {
    try {
        const { name, description, category, price, brand, string_material, number_of_main_string, color,supplierId } = req.body;
        const photoPath = req.file ? `/uploads/${req.file.filename}` : null; // Store relative path

        const productExist = await Product.findOne({ name });
        if (productExist) {
            return res.status(400).json({ message: "Product already exists." });
        }

        const newProduct = new Product({
            name,
            description,
            category,
            price,
            photo: photoPath, // Store only the file path
            brand,
            string_material,
            number_of_main_string,
            color,
            supplierId // Store supplierId in DB

        });  

        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", newProduct });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating product" });
    }
});


// Serve static files (Images)
route.use("/uploads", express.static("uploads"));

route.get("/products", getAllProducts);
route.get("/products/category/:category", getProductsByCategory);
route.get("/products/popular", getPopularProducts);
route.get("/products/featured", getFeaturedProducts);
route.get("/products/:id", getProductsById);
route.put("/update/product/:id", update);
route.delete("/delete/product/:id", deleteProduct);

route.post("/search",SearchProductByName);

export default route;
