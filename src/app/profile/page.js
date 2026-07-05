import Profile from "@/components/profile/Profile";
import ProfileDetails from "@/components/profile/ProfileDetails";

export default function profile() {
  return (
    <section className="py-10 px-25 xl:py-20 xl:px-50">
      <Profile>
        <ProfileDetails />
      </Profile>
    </section>
  );
}
