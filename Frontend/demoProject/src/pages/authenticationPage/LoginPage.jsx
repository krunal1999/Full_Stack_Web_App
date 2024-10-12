import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../componets/formComponets/Button";
import InputBox from "../../componets/formComponets/InputBox";
import { loginSchema } from "../../schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-grey-100 p-5">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Welcome Back! 👋
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <InputBox
              {...register("email", { required: "Email is required" })}
              type="text"
              name="email"
              placeholder="Enter Email Address"
            ></InputBox>

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <InputBox
              {...register("password", { required: "Password is required" })}
              type="password"
              name="password"
              placeholder="Enter Password"
            ></InputBox>

            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              bgColor="bg-blue-600"
              textColor="text-white"
              className="w-full"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-medium ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
