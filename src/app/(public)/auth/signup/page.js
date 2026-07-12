import SignupForm from "@/components/forms/SignupForm";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex w-full max-w-220 mx-auto bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-200 border border-gray-200">
      <div className="relative w-1/2">
        <Image
          src={"/auth-banner.jpg"}
          alt="Fashion banner"
          fill
          sizes="100%"
          loading="eager"
          className="object-cover object-top"
        />
      </div>
      <div className="w-1/2 p-10 flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold uppercase text-pink-500">
          Create Account
        </h1>
        <SignupForm />
        <p className="border-t border-gray-300 w-full relative">
          <span className="uppercase text-gray-800 absolute left-1/2 top-1/2 -translate-1/2 bg-white p-1">
            or
          </span>
        </p>
        <button
          type="button"
          className="cursor-pointer w-full flex items-center justify-center gap-3 rounded-md border border-gray-300 bg-white py-3 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
        >
          <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
          Continue with Google
        </button>
        <p className="text-gray-800 transition-colors ease-in-out duration-300 hover:text-pink-500">
          <Link href={"/auth/login"}>Already have an account? Login</Link>
        </p>
      </div>
    </div>
  );
}
