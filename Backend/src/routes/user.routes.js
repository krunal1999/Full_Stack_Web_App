import { registerUser, loginUser } from "../controller/user.Controller.js";
import express from "express";
import {
  validateLogin,
  validateRegistration,
} from "../middleware/userValidation.middleware.js";

const userRouter = express.Router();

userRouter.route("/register").post(validateRegistration, registerUser);

userRouter.route("/login").post(validateLogin, loginUser);

export default userRouter;
