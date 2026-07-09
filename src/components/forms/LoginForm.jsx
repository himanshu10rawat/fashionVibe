"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validations/loginSchema";
import Link from "next/link";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState({ password: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center w-full gap-3"
    >
      <Input
        register={register}
        errors={errors}
        label={"Enter email"}
        name={"email"}
        id={"email"}
        autoComplete={"email"}
        type={"text"}
      />

      <Input
        register={register}
        passwordVisible={passwordVisible}
        setPasswordVisible={setPasswordVisible}
        errors={errors}
        label={"Enter password"}
        name={"password"}
        id={"password"}
        autoComplete={"current-password"}
      />
      <div className="flex items-center justify-between w-full mb-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("rememberMe")}
            id="rememberMe"
            className="w-4 h-4"
          />
          <label htmlFor="rememberMe" className="text-gray-600">
            Remember Me
          </label>
        </div>
        <Link
          href={"/auth/forgot-password"}
          className="text-gray-600 transition-colors hover:text-pink-500"
        >
          Forgot Password?
        </Link>
      </div>
      <Button ariaLabel={"Login"}>Login</Button>
    </form>
  );
}
