import ApiResponse from "../config/ApiResponse";
import User from "../models/user.models";
import ApiError from "../config/ApiError";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { NextFunction, Request, Response } from "express";



export const generateAccessandRefreshToken= async(userId:any)=>{
    try {
        const user: any = await User.findById(userId);

        const accessToken= await user.generateAccessToken();
        const refreshToken=await user.generateRefreshToken();
        user.refreshToken=refreshToken;
        await user.save({validateBeforeSave:false});

        return {accessToken,refreshToken};

    } catch (error) {
        throw new ApiError(500,"Failed to generate the token");
    }
}



export const login=async (req: Request, res: Response)=>{
     const {email,password,userName}=req.body;
     if (!email||!password || !userName ){
        res.status(400).json(new ApiError(400,"Please provide the details"))
     }
        try {
            const user:any = await User.findOne({email,userName})
            if (!user){
                res.status(400).json(new ApiError(400,"User not found"))
            }
            const isPasswordValid= await  bcrypt.compare(password,user?.password)
            if (!isPasswordValid){
                res.status(400).json(new ApiError(400,"Password didn't match"))
            }
            const {accessToken,refreshToken}=await generateAccessandRefreshToken(user._id);

        }catch(error){
            res.status(400).json(new ApiError(404,"Wrong credentials"))

        }
}

export const forgetPassword=async (req: Request, res: Response)=>{
    const {email,userName,newPassword,confirmPassword}=req.body;
    if (!email || !userName ){
        res.status(400).json(new ApiError(400,"Please provide the details"))
    }
    if (!newPassword || !confirmPassword){
        res.status(400).json(new ApiError(400,"Please provide the details"))
    }
     if (newPassword !== confirmPassword){
            res.status(400).json(new ApiError(400,"Password doesn't match"))
        }
    try {
        const user:any= await User.findOne(
            {
                $or:[{email:String},{userName: String}]
            }
        )
        if (!user){
            res.status(404).json(new ApiError(400,"Please signup first"));
        }

        const resetToken= user.generateResetToken();
        user.resetToken=resetToken;
        //hash the new password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(newPassword,salt);
        user.password=hashedPassword;
        user.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Password set successfully",newPassword));

    } catch (error) {
        console.log(error);
        res.status(400).json(new ApiError(400,"Failed to reset password"))
    }
}

export const logout=async(req: Request, res: Response)=>{
    const refreshToken=req.cookies.refreshToken;
    if (!refreshToken){
        res.status(400).json(new ApiError(400,"Please login first"))
    }
    try {
        const decoded:any=jwt.verify(refreshToken,process.env.JWT_SECRET as string);
        const user:any= await User.findById(decoded.id);
        if (!user){
            res.status(404).json(new ApiError(404,"User not found"))
        }
        user.refreshToken=null;
        await user.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"User logged out successfully",null));
    } catch (error) {
        res.status(400).json(new ApiError(400,"Failed to logout"))
    }
}
