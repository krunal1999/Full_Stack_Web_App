import { registerUser } from "../controller/user.Controller.js";

import express from "express";

const userRouter = express.Router();

userRouter.route("/register").post(registerUser);

export default userRouter;
