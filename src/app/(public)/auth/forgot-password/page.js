import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="px-10 py-15 w-full max-w-120 bg-white shadow-lg shadow-gray-200 border border-gray-200 rounded-lg mx-auto">
      <h1 className="text-center font-bold text-pink-500 text-3xl mb-10 uppercase">
        Forgot Password
      </h1>
      <ForgotPasswordForm />
      <Link
        href={"/auth/login"}
        className="capitalize bg-white text-pink-500 border font-medium border-pink-500 p-3 w-full flex justify-center items-center gap-2 text-center mt-3 transition-colors duration-200 hover:bg-pink-50"
      >
        <ArrowLeft />
        Back to login
      </Link>
    </div>
  );
}
