
// ApiResponse class to send response to the client
class ApiResponse{ 
    statusCode:Number;
    message:String;
    data:any;
    success:boolean;
    constructor(statusCode:Number, message:String, data:any){
        this.statusCode=statusCode;
        this.message=message;
        this.data=data;
        this.success= statusCode == 200 ? true : false;
    }
}

export default ApiResponse