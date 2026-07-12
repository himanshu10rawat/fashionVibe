"use client";

import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Users,
  Star,
  Ticket,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const adminSidebarList = [
    {
      item: "Dashboard",
      icon: <LayoutDashboard />,
      url: "/admin",
    },
    {
      item: "Products",
      icon: <Package />,
      url: "/admin/products",
    },
    {
      item: "Categories",
      icon: <FolderTree />,
      url: "/admin/categories",
    },
    {
      item: "Orders",
      icon: <ShoppingCart />,
      url: "/admin/orders",
    },
    {
      item: "Customers",
      icon: <Users />,
      url: "/admin/customers",
    },
    {
      item: "Reviews",
      icon: <Star />,
      url: "/admin/reviews",
    },
    {
      item: "Coupons",
      icon: <Ticket />,
      url: "/admin/coupons",
    },
    {
      item: "Settings",
      icon: <Settings />,
      url: "/admin/settings",
    },
    {
      item: "Logout",
      icon: <LogOut />,
      url: "/logout",
    },
  ];
  return (
    <aside className="bg-black text-white w-60 px-3 py-4">
      <div className="mb-5 flex items-center gap-2 px-2">
        <div className="relative w-8 h-8 rounded-sm overflow-hidden">
          <Image
            className="object-cover"
            src={"/fashion-logo.png"}
            alt="website logo"
            fill
            sizes="100%"
          />
        </div>
        <span className="font-semibold text-xl">Fashion</span>
      </div>
      <nav className="flex flex-col gap-2">
        {adminSidebarList.map(({ item, icon, url }) => (
          <Link
            className={`flex gap-2 p-3 rounded-sm hover:bg-gray-600 ${pathname === url && "bg-red-500 hover:bg-red-500"}`}
            key={item}
            href={url}
          >
            {icon} {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
