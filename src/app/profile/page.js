import Profile from "@/components/profile/Profile";
import ProfileDetails from "@/components/profile/ProfileDetails";

export default function profile() {
  return (
    <section className="py-20 px-50">
      <Profile>
        <ProfileDetails />
      </Profile>
    </section>
  );
}
