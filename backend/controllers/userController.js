/*
authUser: Handles user login, generates a JWT upon successful authentication.
registerUser: Handles new user registration.
getUserProfile: Fetches the profile of the authenticated user.
updateUserProfile: Allows authenticated users to update their profile.
getUsers: (Admin only) Fetches all users.
deleteUser: (Admin only) Deletes a user.
 */


import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'

//controller to the delete user Auth

async function authUser (req,res){
    try {
        
    } catch (error) {
        
    }
}

//controller to the register new user
async function registerUser (req, res){
    try {
        const {name,email, password, isAdmin, phone} = req.body;
            if(!name || !email || !password || !phone){
                return res.status(400).json({
                    success:false,
                    message:"all details are required"
                })
            }
            if(!email.includes("@")){
                return res.status(400).json({
                    success:false,
                    message:"please enter valid email address"
                }) 
            }
            if(password.length<8){
                return res.status(400).json({
                    success:false,
                    message:"Password should contain at least 8 characters"
                }) 
            }
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                success: false,
                message: "User with this email already exists"
            });
}


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

        
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword,
            isAdmin,
            phone

        })
        const user = await newUser.save();
        console.log(user)
        res.status(201).json({
            success:true,
            message: "data added successfully"
        })

    } catch (error) {
       res.status(500).json({
        success:false,
        message:error.message
       }) 
    }
}

//controller to the get user profile

async function getUserProfile (req, res){
    try {
        
    } catch (error) {
        
    }
}

//controller to the update user profile
async function updateUserProfile(req, res) {
    try {
        
    } catch (error) {
        
    }
}

//controller to the get User
async function getUsers(req, res) {
    try {
        const allUser = await userModel.find()
        res.status(200).json({
            success:true,
            allUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

//controller to the delete User
async function deleteUser(req, res) {
    try {
        const {id} = req.params;
        let removeUser = await userModel.findByIdAndDelete(id);
        if(!removeUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        console.log("user deleted......")
        res.status(200).json({
            success:true,
            removeUser
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}


export {authUser, registerUser, getUserProfile, getUsers, updateUserProfile,deleteUser}