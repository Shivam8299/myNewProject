import express from "express"
import { authUser, deleteUser, getUserProfile, getUsers, registerUser } from "../controllers/userController.js";
import { jwtAuthMiddleware } from "../middleware/authMiddleware.js";

const router  = express.Router()

router.post('/add',registerUser);
router.post('/login',authUser)
router.get('/data',getUsers);
router.delete('/delete/:id',deleteUser);
router.get('/profile',jwtAuthMiddleware,getUserProfile )

export default router 