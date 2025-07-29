import express from "express"
import { deleteUser, getUsers, registerUser } from "../controllers/userController.js";

const router  = express.Router()

router.post('/add',registerUser);
router.get('/data',getUsers);
router.delete('/delete/:id',deleteUser)

export default router 