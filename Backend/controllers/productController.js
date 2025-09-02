import Product from "../models/productModel.js";
 
export const getAllProducts = async (req, res) => {
    try {
        const productData = await Product.find();
        if (!productData || productData.length === 0) {
        return res.status(404).json({ message: "Product data not found." });
        }
        res.status(200).json(productData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};  
    
export const getProductsById = async (req, res) => {
    try {  
      const id = req.params.id;
      const productExist = await Product.findById(id);
      if (!productExist) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json(productExist);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
};

  

export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category; // Get category from URL param
    const products = await Product.find({ category });

    if (!products.length) {
      return res.status(404).json({ message: "No products found for this category." });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};   

export const SearchProductByName = async (req, res) => {
  try {
      let { name } = req.body;

      if (!name) {
          return res.status(400).json({ message: "Product name is required." });
      }

      // Capitalizing first letter
      let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

      const productExist = await Product.findOne({ name: formattedName });

      if (!productExist) {
          return res.status(404).json({ message: "Product not available." });
      }

      res.status(200).json({ id: productExist._id });  
  } catch (error) {
      res.status(500).json({ errorMessage: error.message });
  }
};
  
export const getPopularProducts = async (req, res) => {
  try {
    const products = await Product.find({ name: ['Serja','Jabsring','Bodo Toka', 'Tongtorong','Rogoidang','Flute','Kartal','Jotha','Shoe'] });

    if (!products.length) {
      return res.status(404).json({ message: "No popular products found." });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    // const price = req.params.price; // Get category from URL param
    const products = await Product.find({ name: ['Toka', 'Dhutong','Xutuli', 'Serja', 'Jabsring', 'Cheng'] });

    if (!products.length) {
      return res.status(404).json({ message: "No products found for this price." });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};




export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const productExist = await Product.findById(id);
      if (!productExist) {
        return res.status(404).json({ message: "Product not found." });
      }
      const updatedData = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      // res.status(200).json(updatedData);
      res.status(200).json({ message: "Product Updated successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
};


export const deleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const productExist = await Product.findById(id);
      if (!productExist) {
        return res.status(404).json({ message: "Product not found." });
      }
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
};