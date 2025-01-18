import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useRole } from "./RoleContext";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { setRole } = useRole(); // Get setRole from RoleContext
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(({ email, password, remember }) => {
    if (isAdmin) {
      console.log("Admin Login:", email, password, remember);
      setRole("admin"); // Set the role as admin
      router.push("/AdminDashboard"); // Redirect to Admin Dashboard
    } else {
      console.log("User Login:", email, password, remember);
      setRole("user"); // Set the role as user
      router.push("/home"); // Redirect to Home
    }
  });
  return (
    <div>
      {/* Logo at the top */}
      <div className="absolute top-4 left-4">
        <Image src="/Header_Images/MediGeek_Logo.png" alt="Logo" className="mx-auto h-24" 
        width={200} height={100} />
      </div>

      {/* Login Box */}
      <div className="max-w-md w-full bg-blured p-8 border border-black rounded shadow-lg">
        <div className="text-left font-medium text-xl mb-6">Login</div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-bold text-black">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 6,
                  message: "Email must be at least 6 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Email must not exceed 30 characters",
                },
              })}
              name="email"
              type="text"
              className={`w-full p-2 border rounded mt-1 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-bold text-gray-600"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              name="password"
              type="password"
              className={`w-full p-2 border rounded mt-1 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                {...register("remember")}
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="font-medium text-sm text-blue-500">
              Forgot Password?
            </a>
          </div>

          {/* Admin Login Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isAdmin"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
              className="h-4 w-4 rounded text-blue-300"
            />
            <label htmlFor="isAdmin" className="ml-2 text-sm text-gray-600">
              Login as Admin
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white text-sm py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;