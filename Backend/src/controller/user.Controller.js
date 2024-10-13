import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  console.log(` ${email} ${username} ${password}`);
});

export { registerUser };
