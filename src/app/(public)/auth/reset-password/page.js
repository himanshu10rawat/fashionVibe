import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <div className="px-10 py-15 w-full max-w-120 bg-white shadow-lg shadow-gray-200 border border-gray-200 rounded-lg mx-auto">
      <h1 className="text-center font-bold text-pink-500 text-3xl mb-10 uppercase">
        Reset Password
      </h1>
      <ResetPasswordForm />
    </div>
  );
}
