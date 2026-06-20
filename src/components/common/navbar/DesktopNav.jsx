import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import ActionNav from "./ActionNav";

export default function DesktopNav() {
  return (
    <header className="flex items-center justify-between shadow-md px-5 md:px-10 sticky top-0 z-50 bg-white">
      <Link className="relative inline-block w-20 h-20" href={"/"}>
        <Image src={"/fashion-logo.png"} fill sizes="100%" alt="fashion logo" />
      </Link>
      <NavLinks />
      <SearchBar />
      <ActionNav />
    </header>
  );
}
