"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "../validations/forgotPasswordSchema";
import Input from "../shared/Input";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        errors={errors}
        label={"Enter email"}
        name={"email"}
        id={"email"}
        autoComplete={"email"}
        type={"text"}
      />
      <button
        type="submit"
        className="w-full bg-pink-500 transition-colors ease-in-out duration-300 hover:bg-pink-400 p-3 text-white font-semibold cursor-pointer capitalize"
        aria-label="Send Reset Link Button"
      >
        send reset link
      </button>
    </form>
  );
}
