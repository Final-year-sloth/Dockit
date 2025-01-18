import mongoose,{Schema,Document} from "mongoose";

export interface IUser extends Document{
    id:Number,
    userName:string,
    email:string,
    collegeName:string,
    fullName?:string,
    password?:any,
    avatar: string,
    refreshToken:string,
    createdAt : Date,
    updatedAt : Date,
    role? : string,
    isActive : boolean,//if user delete account then not active otherwise active to be shown in admin portal
}

const userSchema : Schema<IUser> =new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    fullName:{
        type:String,
        trim:true,
        index:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type : String
    },
    isActive:{
        type:Boolean,
        default:true
    },
    avatar:{
        type : String,
    }


},
{timestamps:true})

const User=mongoose.model<IUser>("User",userSchema)
export default User;