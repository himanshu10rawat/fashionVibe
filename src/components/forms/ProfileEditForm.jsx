"use client";

import { Check, Verified } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileSchema } from "../validations/editProfileSchema";
import { useState } from "react";

export default function ProfileEditForm() {
  const [editable, setEditable] = useState({
    mobile: false,
    email: false,
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      mobileNumber: "9217656745",
      email: "hr14638@gmail.com",
      fullName: "Himanshu Rawat",
      gender: "male",
      dateOfBirth: "20/08/1998",
    },
  });

  const gender = useWatch({
    control,
    name: "gender",
  });

  const mobileNumber = useWatch({
    control,
    name: "mobileNumber",
  });

  const email = useWatch({
    control,
    name: "email",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col gap-5 w-full mb-10">
        <div
          className={`flex items-center justify-between p-4 border border-gray-300 ${editable.mobile && "gap-2"}`}
        >
          {editable.mobile ? (
            <Input
              register={register}
              errors={errors}
              label={"Mobile Number"}
              name={"mobileNumber"}
              id={"mobileNumber"}
              autoComplete={"tel"}
              type={"tel"}
              rounded={false}
            />
          ) : (
            <div className="flex flex-col">
              <div className="text-xs capitalize text-gray-400 mb-1.5">
                Mobile Number
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-sm text-gray-800 outline-0">
                  {mobileNumber}
                </span>
                <Verified
                  strokeWidth={2}
                  stroke="white"
                  fill="green"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          )}

          <button
            onClick={() =>
              setEditable((prev) => ({ ...prev, mobile: !prev.mobile }))
            }
            type="button"
            aria-label="Change"
            className="uppercase shrink-0 text-sm font-bold text-gray-800 border border-gray-300 w-1/2 px-4 py-2.5 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
          >
            {editable.mobile ? "Save" : "change"}
          </button>
        </div>
        <div
          className={`flex items-center justify-between p-4 border border-gray-300 ${editable.email && "gap-2"}`}
        >
          {editable.email ? (
            <Input
              register={register}
              errors={errors}
              label={"Email"}
              name={"email"}
              id={"email"}
              autoComplete={"email"}
              type={"email"}
              rounded={false}
            />
          ) : (
            <div className="flex flex-col">
              <div className="text-xs capitalize text-gray-400 mb-1.5">
                Email
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-sm text-gray-800 outline-0">{email}</span>
                <Verified
                  strokeWidth={2}
                  stroke="white"
                  fill="green"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          )}
          <button
            onClick={() =>
              setEditable((prev) => ({ ...prev, email: !prev.email }))
            }
            type="button"
            aria-label="Change"
            className="uppercase shrink-0 text-sm font-bold text-gray-800 border border-gray-300 w-1/2 px-4 py-2.5 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
          >
            {editable.email ? "Save" : "change"}
          </button>
        </div>
        <Input
          register={register}
          errors={errors}
          label={"Full Name"}
          name={"fullName"}
          id={"fullName"}
          autoComplete={"name"}
          type={"text"}
        />
        <div className="grid grid-cols-2 border border-gray-300">
          <input
            hidden
            type="radio"
            value={"male"}
            id="male"
            {...register("gender")}
          />
          <label
            className="border-r border-gray-300 text-center capitalize text-gray-800 text-sm p-3 cursor-pointer"
            htmlFor="male"
          >
            <span className="relative inline-block">
              {gender === "male" && (
                <Check
                  className="absolute top-1/2 -translate-y-1/2 -left-5"
                  strokeWidth={2}
                  stroke="red"
                  width={16}
                  height={16}
                />
              )}
              male
            </span>
          </label>
          <input
            hidden
            type="radio"
            value={"female"}
            id="female"
            {...register("gender")}
          />
          <label
            className="text-center capitalize text-gray-800 text-sm p-3 cursor-pointer"
            htmlFor="female"
          >
            <span className="relative inline-block">
              {gender === "female" && (
                <Check
                  className="absolute top-1/2 -translate-y-1/2 -left-5"
                  strokeWidth={2}
                  stroke="red"
                  width={16}
                  height={16}
                />
              )}
              female
            </span>
          </label>
        </div>
        <Input
          register={register}
          errors={errors}
          label={"Birthday (dd/mm/yyyy)"}
          name={"dateOfBirth"}
          id={"dateOfBirth"}
          autoComplete={"date"}
          type={"text"}
        />
      </div>
      <Button areaLabel={"save details"}>save details</Button>
    </form>
  );
}
