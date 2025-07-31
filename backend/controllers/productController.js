/*
getProducts: Fetches all products (can include search functionality).
getProductById: Fetches a single product by its ID.
createProduct: (Admin only) Creates a new product.
updateProduct: (Admin only) Updates an existing product.
deleteProduct: (Admin only) Deletes a product.
*/

import productModel from "../models/productModel.js";

// all product
async function getProducts (req, res){
    try {
        
    } catch (error) {
        
    }
}

// get single product
async function getSingleProductById (req, res){
    try {
        
    } catch (error) {
        
    }
}

// add new Product

async function createProduct (req, res){
    try {
        const { name, image, brand, description, price, countInStock, isDelivered, isPaid} = req.body;
            if(!name || !brand || !description || !price){
                return res.status(400).json({
                    success:false,
                    message:"all feilds are required"
                })
            }
            const imagePath = req.file?.path || null;
            const productData = await new productModel({
                user:req.user.id || req.user._id,
                name, 
                image:imagePath, 
                brand, 
                description, 
                price, 
                countInStock, 
                isDelivered, 
                isPaid
            })

            let data = await productData.save();
            console.log(data)
            res.status(201).json({
                success:true,
                message:"data added successfully"
            })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// updateProduct product

async function updateProduct (req, res){
    try {
        
    } catch (error) {
        
    }
}

// delete product
async function deleteProduct (req, res){
    try {
        
    } catch (error) {
        
    }
}


export {getProducts, getSingleProductById, createProduct, updateProduct, deleteProduct}