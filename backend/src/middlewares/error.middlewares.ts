import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'
import ApiError from '../config/ApiError'

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let error = err
    if (!(error instanceof ApiError)){
        const statusCode = err.statusCode || error instanceof mongoose.Error? 400:500;

        const message= error.message || "Something went wrong";
        error = new ApiError(statusCode, message,error?.errors || [],error?.stack);
        return res.status(err.statusCode).json(err);
    }
    const response = {
        ...error,
        message: error.message,
        ...(process.env.NODE_ENV === 'development' && {stack: error.stack}),
    }
    return res.status(error.statusCode).json(response);
}
export default errorHandler;