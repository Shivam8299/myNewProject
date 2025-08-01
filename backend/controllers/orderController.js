/*
getOrderById: Fetches a single order by its ID.
addOrderItems: Creates a new order.
updateOrderToPaid: Marks an order as paid (simplified, without actual payment gateway integration).
updateOrderToDelivered: (Admin only) Marks an order as delivered.
getMyOrders: Fetches all orders for the logged-in user.
getOrders: (Admin only) Fetches all orders in the system.
*/

import orderModel from "../models/orderModel.js";

async function getOrderById(req, res){
    try {
        const {id} = req.params;
        const order = await orderModel.findById(id)
        if(!order){
            return res.status(404).json({
                success:false,
                message:"order not found"
            })
        }

        res.status(200).json({
            success:true,
            order:order
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
          
    }
}

async function addOrderItems(req, res){
    try {
        const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;
        if(!orderItems || orderItems.length ===0){
            return res.status(404).json({
                success:false,
                message:"order not found"
            })
        }
        const order = new orderModel({
            user:req.user._id || req.user.id,
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
        })
        const createOrder = await order.save()
        res.status(201).json({
                success:true,
                createOrder
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({
                success:false,
                message:"Internal server error"
            })
    }
}

async function updateOrderToPaid(req, res){
    try {
        const order = await orderModel.findById(req.params.id);
        if(!order){
            return res.status(404).json({
                success:false,
                message:"order not found"
            })
        }
        order.isPaid = true,
        order.paidAt = Date.now()
        const updater = await order.save()
        res.status(200).json({
                success:true,
                updater
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({
                success:false,
                message:"internal server error"
            })
    }
}

async function getMyOrders(req, res){
    const order = await orderModel.find({user: req.user.id || req.user._id});
    if(!order){
        return res.status(404).json({
            success:false,
            message:"order not found"
        })
    }
    res.status(200).json({
                success:true,
                order
            })
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
                success:false,
                message:"Internal server error"
            })
    }
}

async function getOrders(req, res){
    try {
       const orders = await orderModel.find();
       if(!orders){
        return res.status(404).json({
            success:false,
            message:"order not found"
        })
    }
    res.status(200).json({
            success:true,
            orders
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
                success:false,
                message:"Internal server error"
            })
    }
}

async function updateOrderToDelivered(req, res){
    try {
        const order = await orderModel.findById(req.params.id);
        if(!order){
            return res.status(404).json({
                success:false,
                message:"order not found"
            })
        }
        order.isDelivered = true,
        order.deliveredAt = Date.now()
        const updater = await order.save()
        res.status(200).json({
                success:true,
                updater
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({
                success:false,
                message:"internal server error"
            })
    }
}

export {getMyOrders, getOrderById, addOrderItems, updateOrderToDelivered, updateOrderToPaid, getOrders}
