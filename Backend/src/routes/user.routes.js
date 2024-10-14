import { registerUser } from "../controller/user.Controller.js";

import express from "express";
import { validateRegistration } from "../middleware/userValidation.middleware.js";

const userRouter = express.Router();

userRouter.route("/register").post(validateRegistration, registerUser);

export default userRouter;
