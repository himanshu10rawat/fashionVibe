"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { accountDeleteFormSchema } from "../validations/accountDeleteFormSchema";
import { useRouter } from "next/navigation";

export default function AccountDeleteForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountDeleteFormSchema),
    defaultValues: {
      termAndConditions: false,
    },
  });

  const termAndConditions = useWatch({
    control,
    name: "termAndConditions",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
      <div className="pb-5 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-2">
          <input
            type="checkbox"
            id="termAndConditions"
            {...register("termAndConditions")}
            className="w-5 h-5"
          />
          <label htmlFor="termAndConditions" className="text-gray-800">
            I agree to all term and conditions*
          </label>
        </div>

        {errors.termAndConditions && (
          <p className="text-sm text-red-500">
            {errors.termAndConditions.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 py-5 gap-5">
        <button
          disabled={!termAndConditions}
          className="uppercase text-sm font-bold p-2 bg-white border border-gray-300 rounded-full text-gray-800 cursor-pointer transition-colors duration-300 hover:bg-gray-100 disabled:opacity-30 disabled:bg-white disabled:cursor-not-allowed"
          type="submit"
        >
          Delete anyway
        </button>
        <button
          onClick={() => router.push("/")}
          className="uppercase text-sm font-bold p-2 bg-red-400 border border-red-400 rounded-full text-white cursor-pointer transition-colors duration-300 hover:bg-red-500"
          type="button"
        >
          keep account
        </button>
      </div>
    </form>
  );
}
