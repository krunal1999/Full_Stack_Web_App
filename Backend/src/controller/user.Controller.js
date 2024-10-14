import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

/*
steps for registration function
1. data is validated in middleware
2. check if email is unique , if no send error
3. if yes then create the new account , send success
4. before creating hash the password, logic in user.model
5. if user is created successful send response
6. if user not created send error
*/

export const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  // console.log(` ${email} ${username} ${password}`);

  const existingUser = await User.findOne({ email });

  console.log(existingUser);
  if (existingUser) {
    throw new ApiError(400, {}, "User Already Exist");
  }

  const newUser = await User.create({
    email,
    username,
    password,
  });

  // check if user is saved or not
  const createdUser = await User.findById(newUser._id).select("-password");
  
  if (!createdUser) {
    throw new ApiError(500, "User Not Created Server Error");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User Created"));
});
