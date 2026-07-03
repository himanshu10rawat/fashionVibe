import Profile from "@/components/profile/Profile";
import ProfileEdit from "@/components/profile/ProfileEdit";

export default function Edit() {
  return (
    <section className="py-20 px-50">
      <Profile>
        <ProfileEdit />
      </Profile>
    </section>
  );
}
