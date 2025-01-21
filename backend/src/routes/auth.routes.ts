import { Router } from "express";
import {  login, forgetPassword } from "../controllers/auth.controllers";
import { authenticateUser } from "../middlewares/auth.middlewares";
import rateLimit from "express-rate-limit";

// Limit the number of requests per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes"
})

const router:Router = Router();




router.post("/auth/login",limiter,authenticateUser,login);
router.post("/forget-password",limiter,forgetPassword);
export default router;