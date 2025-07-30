import express from "express"
import { authUser, deleteUser, getUserProfile, getUsers, registerUser, updateUserProfile } from "../controllers/userController.js";
import { jwtAuthMiddleware } from "../middleware/authMiddleware.js";

const router  = express.Router()

router.post('/add',registerUser);
router.post('/login',authUser);
router.get('/all/user',jwtAuthMiddleware,getUsers);
router.delete('/delete/:id',jwtAuthMiddleware,deleteUser);
router.get('/profile',jwtAuthMiddleware,getUserProfile );
router.put('/update',jwtAuthMiddleware,updateUserProfile);

export default router 