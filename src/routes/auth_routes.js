import express from "express";
import userController from "../controllers/user_controller.js";
const authRouter = express.Router();

authRouter.path = "/api/auth";

authRouter.post("/signup", userController.signUp);
authRouter.post("/signin", userController.signIn);

export default authRouter;
