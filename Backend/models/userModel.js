import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
            type:String,
            required:true
        },

    email:{
            type:String,
            required:true
        },    

    gender:{
                type:String,
                required:true
            },
             

    phone:{  
            type:Number,
            required:true
        },

    address:{
            type:String,
            required:true
        },

    password:{
            type:String,
            required:true
        },


      
   
},
    { collection: "user" } // ✅ Forces Mongoose to use `user` instead of `users`

)
 
export default mongoose.model("User",userSchema)



  