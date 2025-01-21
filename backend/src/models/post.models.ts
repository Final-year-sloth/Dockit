// Import mongoose and define the schema for the Post model
import mongoose, { Schema,Document } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    image?: string; // URL of the uploaded image
    author: mongoose.Schema.Types.ObjectId; // Ref to User model
    likes: mongoose.Schema.Types.ObjectId[]; // Users who liked the post
    comments: {
      user: mongoose.Schema.Types.ObjectId; // Ref to User model
      text: string;
      createdAt: Date;
    }[];
    createdAt: Date;
    updatedAt: Date;
  }
const postSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image:{
        type: String
    },
    tags:{
        type: [String]
    },
    likes:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: 0
    }],
    comments:[{
        user:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        text:{
            type: String
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    }]


},
{timestamps:true})

const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;