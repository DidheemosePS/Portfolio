"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignIn() {
  const initialFormState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const handleChange =
    (field: keyof typeof formState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({
        ...formState,
        [field]: event.target.value,
      });
    };

  const handleLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await signIn("credentials", {
        email: formState.email,
        password: formState.password,
        callbackUrl: "/dashboard",
      });
      setFormState(initialFormState);
      setIsLoading(false);
      toast.success("Login successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-3rem)] flex justify-center items-center">
      <form
        onSubmit={handleLoginForm}
        className="w-96 flex flex-col px-6 py-10 rounded-md border border-box-color dark:bg-box-color relative"
      >
        <p className="text-center text-2xl font-bold text-box-color dark:text-white">
          Login
        </p>
        <label className="mt-4 mb-1 text-box-color dark:text-white">
          Email
        </label>
        <input
          type="email"
          value={formState.email}
          onChange={handleChange("email")}
          required
          disabled={isLoading}
          className="w-full h-[2.5rem] px-2 border border-box-color dark:border-white text-box-color dark:text-white dark:bg-box-color rounded-md focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="mt-5 mb-1 text-box-color dark:text-white">
          Password
        </label>
        <input
          type={showPassword}
          value={formState.password}
          onChange={handleChange("password")}
          required
          disabled={isLoading}
          className="w-full h-[2.5rem] px-2 border border-box-color dark:border-white text-box-color dark:text-white dark:bg-box-color rounded-md focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        {formState.password && (
          <>
            {showPassword === "password" && (
              <AiFillEyeInvisible
                className="absolute top-[13.55rem] left-80 text-box-color dark:text-white"
                onClick={() => setShowPassword("text")}
              />
            )}
            {showPassword === "text" && (
              <AiFillEye
                className="absolute top-[13.55rem] left-80 text-box-color dark:text-white"
                onClick={() => setShowPassword("password")}
              />
            )}
          </>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-8 flex justify-center items-center gap-2 rounded-md mt-9 text-white bg-blue-500"
        >
          {isLoading && <CgSpinner className="w-6 h-6 animate-spin" />}
          {isLoading ? "Logging..." : "Login"}
        </button>
      </form>
    </div>
  );
}
