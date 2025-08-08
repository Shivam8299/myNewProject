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
        const data = await productModel.find()
        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found"
            });
        }
        res.status(200).json({
            success:true,
            data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

// get single product
async function getSingleProductById (req, res){
    try {
        const {id} = req.params;
        const data = await productModel.findById(id)
        if(!data){
             return res.status(404).json({
                success:false,
                message:"data not found"
            })
        }
        res.status(200).json({
            success:true,
            data
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

// add new Product

async function createProduct (req, res){
    try {
        const { name, image, brand, description, price, countInStock, isDelivered, isPaid} = req.body;
            if(!name || !brand || !description || !price){
                return res.status(400).json({
                    success:false,
                    message:"All feilds are required"
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

async function updateProduct(req, res){
    try {
        const {id} = req.params;
        const data = await productModel.findById(id);
        if(!data){
            return res.status(400).json({
                success:false,
                message:"data not found"
            })
        }
// update product details
data.name = req.body.name || data.name
data.image = req.body.image || data.image
data.brand = req.body.brand || data.brand
data.description = req.body.description || data.description
data.price = req.body.price || data.price
data.countInStock = req.body.countInStock || data.countInStock
data.isDelivered = req.body.isDelivered || data.isDelivered
data.isPaid = req.body.isPaid || data.isPaid

const updateProduct = await data.save();
res.status(200).json({
            success:true,
            updateProduct
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

// delete product
async function deleteProduct (req, res){
    try {
         const {id} = req.params;
        const deletedData = await productModel.findByIdAndDelete(id)
        if(!deletedData){
            return res.status(404).json({
                success:false,
                message:"data not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"data deleted successfully",
            data:deletedData

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })  
    }
}


export {getProducts, getSingleProductById, createProduct, updateProduct, deleteProduct}