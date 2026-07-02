"use client";

import { Heart, MenuIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Sidebar from "./Sidebar";
import BottomNavTabs from "./BottomNavTabs";

export default function MobileNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between py-2 px-4 shadow-sm shadow-gray-200 fixed top-0 left-0 z-50 bg-white w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Sidebar Menu"
          >
            <MenuIcon className="text-gray-500" />
          </button>
          <Link href={"/"} className="relative h-10 w-10 inline-block">
            <Image
              src={"/fashion-logo.png"}
              fill
              sizes="100%"
              alt="fashion logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <button>
            <Heart className="text-gray-500" />
          </button>
          <button>
            <ShoppingBag className="text-gray-500" />
          </button>
        </div>
      </header>
      <SearchBar />
      <Sidebar isSidebarOpened={sidebarOpen} sidebarHandle={setSidebarOpen} />
      <BottomNavTabs />
    </>
  );
}
