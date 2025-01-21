import { Request, Response } from 'express';
import Post from '../models/post.models';
import ApiError from '../config/ApiError';
import ApiResponse from '../config/ApiResponse';

interface CustomRequest extends Request {
    user?: { id: string };
}
export const createPost = async (req: CustomRequest, res: Response) => {
    const { title, description, content, image } = req.body;
    if (!title || !description || !content || !image) {
        res.status(400).json(new ApiError(400, 'Please provide the details'));
    }
    const user = req.user;
    if (!user) {
            res.status(401).json(new ApiError(401, 'Unauthorized'));
            return;
        }
    try {
        const post = new Post({
            title,
            description,
            content,
            image,
            author: user.id,
        });
    } catch (error) {
        res.status(500).json(new ApiError(500, 'Failed to create the post'));
    }};

export const getPosts= async (req: CustomRequest, res: Response)=>{
    try {
        const posts= await Post.find().sort({createdAt:-1})
        res.status(200).json(new ApiResponse(200,"Post fetched successfully",posts))
    } catch (error) {
        res.status(500).json(new ApiError(500,"Failed to fetch the posts"))
    }
};

export const getPostByID= async (req: CustomRequest, res: Response)=>{
    const {_id}=req.params;
    try {
        const post= await Post.findById(_id)
        res.status(200).json(new ApiResponse(200,"Post fetched successfully",post))
    } catch (error) {
        res.status(500).json(new ApiError(500,"Failed to fetch the post"))
    }
};

export const toggleLikePost = async (req: CustomRequest, res: Response) => {
    try {
      const { id } = req.params;
  
      if (!req.user) {
        return res.status(401).json(new ApiError(401, 'User not authorized'));
      }
  
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json(new ApiError(404, 'Post not found'));
      }
  
      const userId: any = req.user.id;
  
      if (post.likes.includes(userId)) {
        // Unlike the post
        post.likes = post.likes.filter((like) => like.toString() !== userId);
      } else {
        // Like the post
        post.likes.push(userId);
      }
  
      await post.save();
  
      res.status(200).json(new ApiResponse(200, 'Post like toggled successfully', post));
    } catch (error: any) {
      res.status(500).json(new ApiError(500, 'Failed to toggle like', error));
    }
  };
  export const addComment = async (req: CustomRequest, res: Response) => {
    try {
      const { id } = req.params;
      const { text } = req.body;
      
      const user:any = req.user;
      if (!user) {
        return res.status(401).json(new ApiError(401, 'User not authorized'));
      }
  
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json(new ApiError(404, 'Post not found'));
      }
      const userId: any =user.id;
      if (post.comments.some((comment) => comment.user.toString() === userId)) {
        return res.status(400).json(new ApiError(400, 'Comment already exists'));
  
      post?.comments.push({ user: user.id, text, createdAt: new Date() });
  
      await post?.save();
  
      res.status(201).json(new ApiResponse(201, 'Comment added successfully', post));}
    } catch (error:any) {
      res.status(500).json(new ApiError(500, 'Failed to add comment', error));
    }
  };

export const getPostComments = async (req: CustomRequest, res: Response) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json(new ApiError(404, 'Post not found'));
        }
        res.status(200).json(new ApiResponse(200, 'Comments fetched successfully', post.comments));
    } catch (error) {
        res.status(500).json(new ApiError(500, 'Failed to fetch comments'));
    }};

// for showing all the posts of a user in profile page    
  export const getPostsByUser = async (req: CustomRequest, res: Response) => {
    try {
        const { userId } = req.params;
        const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });
        res.status(200).json(new ApiResponse(200, 'Posts fetched successfully', posts));
    } catch (error) {
        res.status(500).json(new ApiError(500, 'Failed to fetch posts'));
    }
};

export const deletePost = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        if (!req.user) {
            return res.status(401).json(new ApiError(401, 'User not authorized'));
        }
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json(new ApiError(404, 'Post not found'));
        }
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json(new ApiError(401, 'User not authorized'));
        }
        await post.deleteOne();
        res.status(200).json(new ApiResponse(200, 'Post deleted successfully', {}));
    } catch (error: any) {
        res.status(500).json(new ApiError(500, 'Failed to delete post', error));
    }
}

export const updatePost = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { title, description, content, image } = req.body;
        if (!title || !description || !content || !image) {
            return res.status(400).json(new ApiError(400, 'Please provide the details'));
        }
        if (!req.user) {
            return res.status(401).json(new ApiError(401, 'User not authorized'));
        }
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json(new ApiError(404, 'Post not found'));
        }
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json(new ApiError(401, 'User not authorized'));
        }
        post.title = title;
        post.content = content;
        post.image = image;
        await post.save();
        res.status(200).json(new ApiResponse(200, 'Post updated successfully', post));
    } catch (error: any) {
        res.status(500).json(new ApiError(500, 'Failed to update post', error));
    }
}



