import express from "express";
import { registerUser,loginUser,updateUser,getUserDetails } from "../controllers/userController.js";
import {verifyToken} from '../middleware/VerifyToken.js'

const userRouter=express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/update",verifyToken,updateUser);
userRouter.get("/",verifyToken,getUserDetails);



export default userRouter;

