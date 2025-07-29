//                                          Product Model

// Create server/models/Product.js. This model will define the structure for your e-commerce products:
// user: Reference to the User who created/managed the product (e.g., an admin).
// name: Product name.
// image: Main image URL for the product.
// images: An array of additional image URLs for the product gallery.
// brand: Product brand.
// category: Reference to the Category model.
// description: Detailed product description.
// price: Product price.
// countInStock: Number of items available in stock.
// reviews: An array of embedded review objects (each with name, rating, comment, user).
// ., 'Cash on Delivery', 'Credit Card'.
// paymentResult: (Simplified) Details from a payment gateway.
// isPaid, paidAt: Status of payment.
// isDelivered, deliveredAt: Status of delivery.


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        // Reference to the User model
        ref:'User',
        required: true
    },
    name:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Reference Category model
    required: true
  },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        default:12
    },
    isDelivered:{
        type: Boolean,
        default:false
    },
    isPaid:{
        type:Boolean,
        default:false
    }
},{ timestamps: true })


const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);

export default productModel;