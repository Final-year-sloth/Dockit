import { Router } from "express";
import { signup, login, forgetPassword } from "../controllers/auth.controllers";
import { authenticateUser } from "../middlewares/auth.middlewares";

const router:Router = Router();



router.post("/auth/signup",authenticateUser,signup);
router.post("/auth/login",authenticateUser,login);
router.post("/forget-password",forgetPassword);
export default router;