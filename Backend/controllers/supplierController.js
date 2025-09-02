import Supplier from "../models/supplierModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import Order from "../models/orderModel.js"

const JWT_SECRET = 'Sahid4@#' ;

// insert data into db 
export const create = async (req, res) => {
    try {
      const { email, password, name, gender, phone, address } = req.body;
  
      const supplierExist = await Supplier.findOne({ email });
      if (supplierExist) {
        return res.status(400).json({ message: "Supplier already exists." });
      }

      // Hash the password before storing it
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newSupplier = new Supplier({
          name,
          email,
          gender,
          phone,
          address,
          password: hashedPassword, // Store the hashed password
      });

      // sending id 
      const data = {
        supplier:{
          id: newSupplier.id ,
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);

      const savedData = await newSupplier.save();
      // res.status(200).json(savedData);
      res.status(200).json({ message: "Supplier created successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
};

  
export const getAllSupplier = async (req, res) => {
    try {
        const supplierData = await Supplier.find();
        if (!supplierData || supplierData.length === 0) {
        return res.status(404).json({ message: "Supplier data not found." });
        }
        res.status(200).json(supplierData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
 

export const getSupplierById = async (req, res) => {
    try {
      const id = req.params.id;
      const supplierExist = await Supplier.findById(id);
      if (!supplierExist) {
        return res.status(404).json({ message: "Supplier not found." });
      }
      res.status(200).json(supplierExist);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
}; 


export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const supplierExist = await Supplier.findById(id);
      if (!supplierExist) {
        return res.status(404).json({ message: "Supplier not found." });
      }
      const supplierData = await Supplier.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      // res.status(200).json(updatedData);
      res.status(200).json({ message: "Supplier Updated successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
};  

export const deleteSupplier = async (req, res) => {
    try {
      const id = req.params.id;
      const supplierExist = await Supplier.findById(id);
      if (!supplierExist) {
        return res.status(404).json({ message: "Supplier not found." });
      }
      await Supplier.findByIdAndDelete(id);
      res.status(200).json({ message: "Supplier deleted successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  };


// Route 2: Authenticate a supplier using : POST "/api/user/login". no  Login Required
export const LoginSupplier = async (req, res) => {
  try {
      // console.log(req.body);
      const { email, password } = req.body;
      const supplier = await Supplier.findOne({ email });

      if (!supplier) {
          return res.status(401).json({ message: "Invalid credentials." });
      }

      // Compare hashed password
      const passwordCompare = await bcrypt.compare(password,supplier.password)
      if(!passwordCompare){
        return res.status(401).json({ message: "Invalid credentials." });
      }  

      // Generate JWT token
      const data = { supplier: { id: supplier._id } };
      const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });  // ✅ Add expiry time
        

      res.status(200).json({ 
        success: true, 
        message: "Login successful.",
        supplierId: supplier._id ,// ✅ Sending user ID for navigation
        authtoken, // // ✅ Sending JWT token
      });
  } catch (error) {
      res.status(500).json({ errorMessage: error.message });
  }
};
  
// Route 3: get logged in supplier details using: Post :"/api/user/getUser". Login Required
  
export const GetLoggedInSupplierDetails =  async (req, res) => {
  try {
    const supplierId = req.supplier.id;
    const supplier = await Supplier.findById(supplierId).select("-password")
    res.send(supplierId)
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
}
 }
  
 // supplier can see the see the product sales which they supply using their supplierId

 export const getOrdersBySupplier = async (req, res) => {
  try {
      const { supplierId } = req.params;

      // Find orders containing products with the given supplierId
      const orders = await Order.find({ "products.supplierId": supplierId })
          .populate("userId", "name") // Populate user details
          .exec();

      // Filter only relevant products per supplier
      const filteredOrders = orders.map(order => ({
          _id: order._id,
          userId: order.userId, // Already populated
          createdAt: order.createdAt,
          products: order.products.filter(product => product.supplierId === supplierId)
      }));

      res.status(200).json(filteredOrders);
  } catch (error) {
      res.status(500).json({ message: "Error fetching orders", error });
  }
};


