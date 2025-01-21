import User from "../models/user.models";
import ApiError from "../config/ApiError";
import ApiResponse from "../config/ApiResponse";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

interface CustomRequest extends Request {
    user?: { id: string };
}


export const registerUser=async(req: Request,res: Response)=>{
    const {fullName ,collegeName, email, password }=req.body;
    try {
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser =await User.create({
            fullName,
            collegeName,
            email,
            password:hashedPassword
        })
        res.status(201).json(new ApiResponse(201,"User created successfully", newUser))//remove the string and make sure to return the newUser.
    } catch (error) {
        res.status(400).json()
    }

}
//settings page 
export const updateAvatar=  (async(req: any, res:any)=>{
    try {
        const {avatar}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        user.avatar=avatar;
        await user.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Avatar updated successfully", user))
    } catch (error) {
        res.status(400).json(new ApiError(400,"Failed to update avatar"))
    }


})
export const logoutUser=async(req:Request, res:Response)=>{}
export const updateEmail=async(req:any, res:any)=>{
    try {
        const {email}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        user.email=email;
        await user.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Email updated successfully", user))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to update email"))
    }
}
export const changePassword=async(req:CustomRequest, res:Response)=>{}
export const deleteUser=async(req:any, res:any)=>{
    try {
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        await user.deleteOne();
        res.status(200).json(new ApiResponse(200,"User deleted successfully", null))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to delete user"))
    }
}

//profile pages
export const updateProfile=async(req: CustomRequest, res:Response)=>{
    try {
        const {fullName,collegeName}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        user.fullName=fullName;
        user.collegeName=collegeName;
        await user.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Profile updated successfully", user))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to update profile"))
    }


}
export const getFollowers= async(req: any, res:any)=>{
    try {
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        const followers= await User.find({followers:user.id});
        res.status(200).json(new ApiResponse(200,"Followers fetched successfully", followers))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to fetch followers"))
    }
}
export const getFollowings= async(req: any, res:any)=>{
    try {
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        const followings= await User.find({following:user.id});
        res.status(200).json(new ApiResponse(200,"Followings fetched successfully", followings))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to fetch followings"))
    }
}

//friend-request
export const sendFriendRequest=async(req: CustomRequest, res:Response)=>{
    try{
        const {receiverId}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const sender: any = await User.findById(req.user.id);
        if (!sender){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        const receiver: any = await User.findById(receiverId);
        if (!receiver){
            return res.status(401).json(new ApiError(401,"User not found"));
        }
        if (receiver.friendRequests.includes(sender.id)){
            return res.status(400).json(new ApiError(400,"Friend request already sent"));
        }
        if (receiver.friends.includes(sender.id)){
            return res.status(400).json(new ApiError(400,"Already friends"));
        }
        receiver.friendRequests.push(sender.id);
        await receiver.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Friend request sent successfully", receiver))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to send friend request"))
    }
}
export const acceptFriendRequest=async(req: CustomRequest, res:Response)=>{
    try{
        const {senderId}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const receiver: any = await User.findById(req.user.id);
        if (!receiver){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        const sender: any = await User.findById(senderId);
        if (!sender){
            return res.status(401).json(new ApiError(401,"User not found"));
        }
        if (!receiver.friendRequests.includes(sender.id)){
            return res.status(400).json(new ApiError(400,"No friend request found"));
        }
        if (receiver.friends.includes(sender.id)){
            return res.status(400).json(new ApiError(400,"Already friends"));
        }
        receiver.friends.push(sender.id);
        sender.friends.push(receiver.id);
        receiver.friendRequests=receiver.friendRequests.filter((id:any)=>id!==sender.id);
        await receiver.save({validateBeforeSave:false});
        await sender.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Friend request accepted successfully", receiver))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to accept friend request"))
    }
}
export const declineFriendRequest=async(req: CustomRequest, res:Response)=>{
    try{
        const {senderId}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const receiver: any = await User.findById(req.user.id);
        if (!receiver){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        const sender: any = await User.findById(senderId);
        if (!sender){
            return res.status(401).json(new ApiError(401,"User not found"));
        }
        if (!receiver.friendRequests.includes(sender.id)){
            return res.status(400).json(new ApiError(400,"No friend request found"));
        }
        receiver.friendRequests=receiver.friendRequests.filter((id:any)=>id!==sender.id);
        await receiver.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Friend request declined successfully", receiver))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to decline friend request"))
    }
}
export const blockFriend=async(req: CustomRequest, res:Response)=>{
    try{
        const {friendId}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        const friend: any = await User.findById(friendId);
        if (!friend){
            return res.status(401).json(new ApiError(401,"User not found"));
        }
        if (user.blockedUsers.includes(friend.id)){
            return res.status(400).json(new ApiError(400,"Already blocked"));
        }
        user.blockedUsers.push(friend.id);
        await user.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Friend blocked successfully", user))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to block friend"))
    }
}
export const unblockFriend=async(req: CustomRequest, res:Response)=>{
    try{
        const {friendId}=req.body;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, "User not authorized"));
        }
        const user: any = await User.findById(req.user.id);
        if (!user){
            return res.status(401).json(new ApiError(401,"User not authorized"));
        }
        const friend: any = await User.findById(friendId);
        if (!friend){
            return res.status(401).json(new ApiError(401,"User not found"));
        }
        if (!user.blockedUsers.includes(friend.id)){
            return res.status(400).json(new ApiError(400,"Not blocked"));
        }
        user.blockedUsers=user.blockedUsers.filter((id:any)=>id!==friend.id);
        await user.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,"Friend unblocked successfully", user))
    }catch(error){
        res.status(400).json(new ApiError(400,"Failed to unblock friend"))
    }
}

