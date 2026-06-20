import Image from "next/image";
import MobileNavLinks from "./MobileNavLinks";

export default function Sidebar({ isSidebarOpened, sidebarHandle }) {
  return (
    <div
      onClick={() => sidebarHandle(false)}
      className={`w-full h-dvh bg-black/30 fixed z-50 top-0 ${isSidebarOpened ? "left-0" : "-left-full"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white h-full w-4/5 transition-transform duration-300 overflow-y-auto ${isSidebarOpened ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-2 flex items-center gap-2 bg-pink-100">
          <Image
            src={"/fashion-logo.png"}
            alt="fashion logo"
            width={40}
            height={40}
          />
          <div className="flex items-center gap-1">
            <span className="font-semibold text-md">Fashion</span>
            <span className="text-xs">Since 1880</span>
          </div>
        </div>
        {isSidebarOpened && <MobileNavLinks />}
      </div>
    </div>
  );
}
