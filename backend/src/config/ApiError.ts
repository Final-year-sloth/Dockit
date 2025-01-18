
class ApiError extends Error {
    statusCode: number;
    error: any[];
    data: any;
    success: boolean;
    
    constructor(
        statusCode: number,message="Something went wrong", error=[], stack="") {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.data=null;
        this.message=message;
        this.success=false;
        if (stack) {
            this.stack=stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
            
        }
    }}
    export default ApiError;