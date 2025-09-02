import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
            type:String,
            required:true
        },

    description:{
            type:String,
            required:true
        },  

    category:{
            type: String,
            required:true  
        },  
        
    price:{
            type:Number,
            required:true
        },

    photo: {
        type:String
    } ,   
    
    brand: {
        type: String,
        required:false
    },

    string_material: {
        type: String,
        required: false
    },

    number_of_main_string: {
        type: Number,
        required: false
    },


    color: {
        type: String,
        required: false
    },
    stock: {
        type: Number
    },
      
    supplierId: {
        type: String,
        required: true // Now supplierId is mandatory
    }
    
})


export default mongoose.model("Products",productSchema);