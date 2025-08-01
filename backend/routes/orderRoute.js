import express from 'express'
import {getMyOrders, getOrderById, addOrderItems, updateOrderToDelivered, updateOrderToPaid, getOrders} from '../controllers/orderController.js';
import { jwtAuthMiddleware } from '../middleware/authMiddleware.js';
import isAdmin from '../middleware/admin.js';

const orderRouter = express.Router();

orderRouter.get('/myOrders',jwtAuthMiddleware, getMyOrders);
orderRouter.get('/',jwtAuthMiddleware,isAdmin, getOrders);
orderRouter.get('/:id',jwtAuthMiddleware,getOrderById)
orderRouter.post('/add',jwtAuthMiddleware, addOrderItems);
orderRouter.put('/delivered/:id',jwtAuthMiddleware, isAdmin,updateOrderToDelivered);
orderRouter.put('/paid/:id',jwtAuthMiddleware,isAdmin , updateOrderToPaid);

export default orderRouter