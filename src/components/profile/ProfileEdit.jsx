import ProfileEditForm from "../forms/ProfileEditForm";

export default function ProfileEdit() {
  return (
    <div className="border border-gray-300 p-10">
      <h2 className="text-gray-800 capitalize text-lg font-bold border-b border-gray-300 pb-5 mb-10">
        Edit Details
      </h2>
      <ProfileEditForm />
    </div>
  );
}
