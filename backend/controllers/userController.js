/*
authUser: Handles user login, generates a JWT upon successful authentication.
registerUser: Handles new user registration.
getUserProfile: Fetches the profile of the authenticated user.
updateUserProfile: Allows authenticated users to update their profile.
getUsers: (Admin only) Fetches all users.
deleteUser: (Admin only) Deletes a user.

*/

import isAdmin from "../middleware/admin.js";
import { generateToken, comparePassword} from "../middleware/authMiddleware.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";



//controller to the register new user
async function registerUser(req, res) {
  try {
    console.log(req.body)
    const {name, email, password, phone, isAdmin } = req.body;
    if (!name || !email || !password ) {
      return res.status(400).json({
        success: false,
        message: "all details are required",
      });
    }
    if (!email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "please enter valid email address",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password should contain at least 8 characters",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      phone,
    });

    const user = await newUser.save();
    // console.log(user);
    const payload = {
      id: user._id,
      username: user.name,
      email: user.email,
      isAdmin : user.isAdmin
    };
    const token = generateToken(payload);
    res.status(201).json({
      success: true,
      message: "data added successfully",
      token,
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

//controller to the get user profile

async function getUserProfile(req, res) {
  try {
    const userProfile = req.user;
    if(!userProfile){
      return res.status(400).json({
        success:false,
        message:"user not found"
      })
    }
    let profile = await userModel.findById(userProfile.id)
    res.status(200).json({
      success:true,
      profile
    })
  } catch (error) {
      res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

//controller to the update user profile
async function updateUserProfile(req, res) {
  try {
    
    const user = await userModel.findById(req.user.id)
    if(!user){
      return res.status(404).json({
        success:false,
        message:"user not found"
      })
    }
    // for update user
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;

    // password update
    if(req.body.password){
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password,salt)
    }
    const updatedUser = await user.save();
    res.status(200).json({
      success:true,
      message:"profile updated successfully",
      updatedUser
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
}

async function authUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await userModel.findOne({ email: email });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: "invalid email or password",
      });
    }
    // generate token
    const payload = {
      id: user._id,
      email: user.email,
      isAdmin:user.isAdmin
    };
    const token = generateToken(payload);
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


//controller to the get User
async function getUsers(req, res) {
  try {
    const allUser = await userModel.find();
    res.status(200).json({
      success: true,
      allUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
}

//controller to the delete User
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    let removeUser = await userModel.findByIdAndDelete(id);
    if (!removeUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    console.log("user deleted......");
    res.status(200).json({
      success: true,
      removeUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
}

export {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
  updateUserProfile,
  deleteUser,
};
