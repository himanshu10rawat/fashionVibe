import Profile from "@/components/profile/Profile";
import ProfileEdit from "@/components/profile/ProfileEdit";

export default function Edit() {
  return (
    <section className="py-10 px-25 xl:py-20 xl:px-50">
      <Profile>
        <ProfileEdit />
      </Profile>
    </section>
  );
}
