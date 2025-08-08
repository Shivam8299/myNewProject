import express from 'express'
import { getProducts, getSingleProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { jwtAuthMiddleware } from '../middleware/authMiddleware.js';
import upload from '../middleware/multer.js';
import isAdmin from '../middleware/admin.js';

const productRouter = express.Router();

productRouter.get('/all', getProducts);
productRouter.get('/data/:id',getSingleProductById);
productRouter.post('/add',jwtAuthMiddleware, isAdmin, upload.single('image'), createProduct);
productRouter.put('/update/:id',jwtAuthMiddleware,isAdmin ,upload.single('image'), updateProduct);
productRouter.delete('/delete/:id',jwtAuthMiddleware, isAdmin,deleteProduct);

export default productRouter