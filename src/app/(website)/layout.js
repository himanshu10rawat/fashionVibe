import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-4 md:mt-20">{children}</main>
      <Footer />
    </>
  );
}
