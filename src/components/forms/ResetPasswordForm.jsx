"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../validations/resetPasswordSchema";
import Input from "../shared/Input";

export default function ResetPasswordForm() {
  const [passwordVisible, setPasswordVisible] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        passwordVisible={passwordVisible}
        setPasswordVisible={setPasswordVisible}
        errors={errors}
        label={"Enter new password"}
        name={"newPassword"}
        id={"newPassword"}
        autoComplete={"new-password"}
      />
      <Input
        register={register}
        passwordVisible={passwordVisible}
        setPasswordVisible={setPasswordVisible}
        errors={errors}
        label={"Confirm password"}
        name={"confirmPassword"}
        id={"confirmPassword"}
        autoComplete={"new-password"}
      />
      <button
        type="submit"
        className="w-full bg-pink-500 transition-colors ease-in-out duration-300 hover:bg-pink-400 p-3 text-white font-semibold cursor-pointer capitalize"
        aria-label="Send Reset Link Button"
      >
        reset password
      </button>
    </form>
  );
}
