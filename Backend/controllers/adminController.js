import Admin from "../models/adminModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = 'Sahid4@#' ;

//ROute 1: create admin, no Login Required
export const create = async (req, res) => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return res.status(400).json({ message: "Admin already exists." });
    }

    const {name, email, password }  = req.body;

    // Hash the password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword, // Store the hashed password
  });

  // sending id 
  const data = {
    admin:{
      id: newAdmin.id ,
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);
  console.log(authtoken);

  const savedData = await newAdmin.save();
    res.status(200).json({ message: "Admin created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAdmin = async (req, res) => {
    try {
        const adminData = await Admin.find();
        if (!adminData || adminData.length === 0) {
        return res.status(404).json({ message: "Admin data not found." });
        }
        res.status(200).json(adminData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
 
export const getAdminById = async (req, res) => {
    try {
      const id = req.params.id;
      const adminExist = await Admin.findById(id);
      if (!adminExist) {
        return res.status(404).json({ message: "Admin not found." });
      }
      res.status(200).json(adminExist);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
}; 

export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const adminExist = await Admin.findById(id);
      if (!adminExist) {
        return res.status(404).json({ message: "Admin not found." });
      }
      const updatedData = await Admin.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      // res.status(200).json(updatedData);
      res.status(200).json({ message: "Admin Updated successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
}; 

// Route 2: Authenticate a admin using : POST "/api/admin/login". no  Login Required

export const LoginAdmin = async (req, res) => {
  try {
      console.log(req.body);
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email }); // ✅ Match by email instead of name

      if (!admin) {
          return res.status(401).json({ message: "Admin not exists." });
      }

      // Compare hashed password
      const passwordCompare = await bcrypt.compare(password, admin.password);
      if (!passwordCompare) {
        return res.status(401).json({ message: "Invalid credentials." });
      } 

      // Generate JWT token

      const data = { admin: { id: admin._id } }; // Must be `{ admin: { id: value } }`
      const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

        

      res.status(200).json({ 
        success: true, 
        message: "Login successful.",
        adminId: admin._id ,
        authtoken,   // ✅ Sending JWT token
      });

  } catch (error) {
      res.status(500).json({authtoken, errorMessage: error.message });
  }
};

// Route 3: get logged in admin details using: Post :"/api/admin/getUser". Login Required
  
export const GetLoggedInAdminDetails = async (req, res) => {
  try {
      console.log("Request Admin:", req.admin); // Debugging line
      if (!req.admin || !req.admin.id) {
          return res.status(401).json({ error: "Unauthorized access" });
      }

      const adminId = req.admin.id;
      const admin = await Admin.findById(adminId).select("-password");
      res.send(adminId);
  } catch (error) {
      res.status(500).json({ errorMessage: error.message });
  }
};



export const LogoutAdmin = async (req, res) => { 
  try {
      console.log("Logout request received");

      // Assuming session-based or token-based auth, clear session/token here
      // Example: req.session.destroy() for session-based
      // Example: res.clearCookie("token") for cookie-based auth

      res.status(200).json({ 
        success: true, 
        message: "Logout successful."
      });
  } catch (error) {
      res.status(500).json({ errorMessage: error.message });
  }
};
