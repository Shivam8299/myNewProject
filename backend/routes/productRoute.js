import express from 'express'
import { getProducts, getSingleProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

router.get('/all',getProducts);
router.get('/data',getSingleProductById);
router.post('/add',createProduct);
router.put('/update', updateProduct);
router.delete('/delete',deleteProduct);

export default router