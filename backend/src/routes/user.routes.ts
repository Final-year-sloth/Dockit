import { Router } from "express";
import { deleteUser, getFollowers, getFollowings, logoutUser, registerUser, updateAvatar, updateEmail } from "../controllers/user.controllers";



const router: Router = Router();

router.post("/api/users",registerUser);
router.put("/api/users/:id",updateAvatar);
router.get("/api/users/:id",logoutUser);
router.put("/api/users/:id",updateEmail);
router.post("/api/users",deleteUser)
router.get("/api/users/:id",getFollowers)
router.get("/api/users/:id",getFollowings)

export default router;