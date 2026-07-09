import AccountDeleteForm from "@/components/forms/AccountDeleteForm";
import Profile from "@/components/profile/Profile";
import Image from "next/image";

export default function DeleteAccount() {
  return (
    <Profile>
      <div className="p-10 border border-gray-300">
        <h2 className="font-bold text-lg text-gray-700 capitalize border-b border-gray-300 pb-5 mb-5">
          Delete account
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-800 text-2xl mb-2">
              Himanshu,
              <br /> Is this goodbye?
            </h3>
            <p className="text-sm text-gray-500">
              Are you sure you don&apos;t want to reconsider?
            </p>
          </div>
          <div className="relative h-40 w-40">
            <Image
              src={"/icons/sad-emoji.png"}
              alt="Sad emoji"
              fill
              sizes="100%"
              loading="eager"
            />
          </div>
        </div>
        <AccountDeleteForm />
      </div>
    </Profile>
  );
}
