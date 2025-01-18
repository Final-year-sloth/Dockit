import  jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import ApiError from "../config/ApiError";
import User from "../models/user.models";
interface CustomRequest extends Request {
    user?: any; // Make 'user' optional 
  }
export const authenticateUser : any= async (req: CustomRequest, res: Response, next: NextFunction) => {
    
    //get the token from the header
    const token = req.header("Authorization")?.replace("Bearer ", "") || req.cookies.token;
    if (!token) {
        return res.status(401).json(new ApiError(401, "Unauthorized"));
    }

    //verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        const user:any = await User.findById((decoded as any).id).select("-password -refreshToken");
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
            req.user = user;
            next();
        }
    }catch(error){
        return res.status(401).json(new ApiError(401,"User not authorized"));
    }
}