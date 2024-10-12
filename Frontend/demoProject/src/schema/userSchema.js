import { z } from "zod";

const baseSchema = z.object({
  email: z
    .string("Please Enter Valid Email ID")
    .email("Please Enter Valid Email ID"),
  password: z
    .string(
      "Password Must Contain 6 to 16 character including lowercase,uppercase,number"
    )
    .min(
      6,
      "Password Must Contain 6 to 16 character including lowercase,uppercase,number"
    )
    .max(
      16,
      "Password Must Contain 6 to 16 character including lowercase,uppercase,number"
    )
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
      "Password Must Contain 6 to 16 character including lowercase,uppercase,number"
    ),
});

export const registrationSchema = baseSchema.extend({
  username: z
    .string("Please Enter Valid Username")
    .min(3, "Username must be more than 3 letters"),
});

export const loginSchema = baseSchema;
