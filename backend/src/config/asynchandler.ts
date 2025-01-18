//Found somewhere where it said it was a good practice. 
import { NextFunction } from "express";
import { Request, Response } from "express";


function requestHandler(err: Error, req: Request, res: Response, next: NextFunction): any {
    // Your request handling logic here
    try {
        // Simulate some async operation
        setTimeout(() => {
            res.status(200).json({ message: "Request handled successfully" });
        }, 1000);
    } catch (error) {
        next(error);
    }
}
interface asyncHandler{
    err?:any,
    res?:any,
    next?: any
}

const asyncHandler=(err:any,res:Response,next:NextFunction)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(requestHandler(err,req,res, next)).catch((err)=>{
            next(err);
        })
    }
}
export default asyncHandler;

