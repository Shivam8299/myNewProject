import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
})

const categoryModel = mongoose.models.Category|| mongoose.model('Category',categorySchema);

export default categoryModel;