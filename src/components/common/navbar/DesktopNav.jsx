import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import ActionNav from "./ActionNav";

export default function DesktopNav() {
  return (
    <header className="flex items-center justify-between shadow-sm shadow-gray-200 px-5 md:px-10 fixed left-0 top-0 z-50 w-full bg-white">
      <Link className="relative inline-block w-20 h-20" href={"/"}>
        <Image
          src={"/fashion-logo.png"}
          fill
          sizes="100%"
          alt="fashion logo"
          loading="eager"
        />
      </Link>
      <NavLinks />
      <SearchBar />
      <ActionNav />
    </header>
  );
}
