import { registerSchema, loginSchema } from "../validation/userValidation.js";


const validateRegistration = (req, res, next) => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).json({
      success: false,
      errors: errorMessages,
    });
  }

  // console.log("validation checked");

  next();
};

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).json({
      success: false,
      errors: errorMessages,
    });
  }

  next();
};

export { validateRegistration, validateLogin };
