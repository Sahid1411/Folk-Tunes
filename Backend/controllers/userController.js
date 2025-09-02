import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = 'Sahid4@#' ;
  
//ROute 1: create user, no Login Required
export const create = async (req, res) => {
  try {
      const { email, password, name, gender, phone, address } = req.body;

      const userExist = await User.findOne({ email });
      if (userExist) {
          return res.status(400).json({ message: "User already exists." });
      }
     
      // Hash the password before storing it
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
          name,  
          email,   
          gender,
          phone,
          address,
          password: hashedPassword, // Store the hashed password
      });

      // sending id 
      const data = {
        user:{
          id: newUser.id ,
        }
      }  
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);

      await newUser.save();
      res.status(200).json({ authtoken,  message: "User created successfully." });

  } catch (error) {
      res.status(500).json({ errorMessage: error.message });
  }
};

  
export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length === 0) {
        return res.status(404).json({ message: "User data not found." });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
 

export const getUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      if (!userExist) {
        return res.status(404).json({ message: "User not found." });
      }
      res.status(200).json(userExist);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
}; 


export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      if (!userExist) {
        return res.status(404).json({ message: "User not found." });
      }
      const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true, // { new: true } ensures that the updated user document is returned.
      });
      // res.status(200).json(updatedData);
      res.status(200).json({ message: "User Updated successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
};  

export const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      if (!userExist) {
        return res.status(404).json({ message: "User not found." });
      }
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  };

// Route 2: Authenticate a user using : POST "/api/user/login". no  Login Required
  export const LoginUser = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;  // ✅ Use email instead of username
        const user = await User.findOne({ email });
  
        if (!user) {
          return res.status(401).json({ message: "Invalid credentials." });
        }
  
        // Compare hashed password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          return res.status(401).json({ message: "Invalid credentials." });
        }  
     
        // Generate JWT token
        const data = { user: { id: user._id } };
        const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });  // ✅ Add expiry time
  
        res.status(200).json({
          success: true,
          message: "Login successful.",
          userId: user._id,
          authtoken, // ✅ Sending JWT token
        });
  
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

// Route 3: get logged in user details using: Post :"/api/user/getUser". Login Required
  
export const GetLoggedInUserDetails =  async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(userId)
    
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
}   
 }
