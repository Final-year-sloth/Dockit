import { Router } from "express"
import { createPost, deletePost, getPosts, getPostsByUser, updatePost } from "../controllers/post.controllers"



const router :Router = Router();

router.get("/api/posts",getPosts);
router.post("/api/posts",createPost)
router.get("/api/posts/:id",getPostsByUser)
router.put("/api/posts/:id",updatePost)
router.delete("/api/posts/:id",deletePost)