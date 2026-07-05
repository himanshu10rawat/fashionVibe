"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema } from "../validations/signupSchema";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function SignupForm() {
  const [passwordVisible, setPasswordVisible] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termAndCondition: false,
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
        label={"Enter full name"}
        name={"fullName"}
        id={"fullName"}
        autoComplete={"name"}
        type={"text"}
      />

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

      <div className="w-full mb-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("termAndCondition")}
            id="termAndCondition"
            className="w-4 h-4"
          />
          <label htmlFor="termAndCondition" className="text-gray-600">
            I agree to Terms & Conditions
          </label>
        </div>
        {errors.termAndCondition && (
          <p className="text-red-600 mt-1 text-sm">
            {errors.termAndCondition.message}
          </p>
        )}
      </div>
      <Button areaLabel={"Create account"}>Create Account</Button>
    </form>
  );
}
