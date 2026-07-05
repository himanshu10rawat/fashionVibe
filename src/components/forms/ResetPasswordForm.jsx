"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../validations/resetPasswordSchema";
import Input from "../shared/Input";
import Button from "../shared/Button";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-3"
    >
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
      <Button areaLabel={"Reset Password"}>reset password</Button>
    </form>
  );
}
