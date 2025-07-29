import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    phone:{
        type:Number,
        required:true
    },
})

const userModel = mongoose.models.User || mongoose.model('User',userSchema)

export default userModel