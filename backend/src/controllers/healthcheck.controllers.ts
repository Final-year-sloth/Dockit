import ApiResponse from "../config/ApiResponse";
// import asyncHandler from "../config/asynchandler";
import { Request, NextFunction, Response } from "express";


export const healthCheck = async(res:Response, req: Request,next:NextFunction)=> {
    return res
        .status(200)
        .json(new ApiResponse(
            200,"Health-check successful",{}
        ));
}
export default healthCheck;
