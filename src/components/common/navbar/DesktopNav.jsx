import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchInput from "../../shared/SearchInput";
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
      <SearchInput
        placeholder={"Search for fashion"}
        bgColor="bg-gray-100"
        focusBgColor="focus-within:bg-white"
        rounded="rounded-sm"
        borderColor="border-gray-100"
        strokeWidth="2"
        strokeColor="#6a7282"
        textColor="text-gray-500"
        placeholderColor="placeholder:text-gray-500"
      />
      <ActionNav />
    </header>
  );
}
