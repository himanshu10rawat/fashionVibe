"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "../validations/forgotPasswordSchema";
import Input from "../shared/Input";
import Button from "../shared/Button";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-3"
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
      <Button areaLabel={"Send Reset Link"}>send reset link</Button>
    </form>
  );
}
