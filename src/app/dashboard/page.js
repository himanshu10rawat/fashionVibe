import Profile from "@/components/profile/Profile";
import { BoxIcon, Edit, Heart, LocationEdit, Ribbon, User } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const itemList = [
    {
      icon: "order",
      url: "/orders",
      title: "orders",
      description: "Check your order status",
    },
    {
      icon: "wishlist",
      url: "/wishlist",
      title: "Collection & Wishlist",
      description: "All your curated product collection",
    },
    {
      icon: "address",
      url: "/address",
      title: "Addresses",
      description: "Save addresses for a hassle-free checkout",
    },
    {
      icon: "coupon",
      url: "/coupons",
      title: "coupons",
      description: "Manage coupons for additional discounts",
    },
    {
      icon: "edit",
      url: "/profile/edit",
      title: "Profile Details",
      description: "Change your profile details",
    },
  ];
  return (
    <Profile>
      <div className="flex justify-between items-start p-5 bg-gray-100 mb-5">
        <div className="flex items-center gap-5">
          <span className="w-35 h-35 bg-gray-500 block">
            <User width={"100%"} height={"100%"} fill="white" strokeWidth={0} />
          </span>
          <span className="text-sm text-gray-800">hr14638@gmail.com</span>
        </div>
        <Link
          href={"/profile/edit"}
          className="uppercase px-3 py-1.5 border border-gray-800 text-gray-800 text-xs bg-white font-semibold transition-colors duration-200 hover:bg-gray-800 hover:text-white"
        >
          edit profile
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-5">
        {itemList.map(({ icon, url, title, description }) => (
          <Link
            key={title}
            href={url}
            className="border border-gray-200 text-center p-2 flex flex-col items-center justify-center aspect-square cursor-pointer transition-colors duration-300 hover:bg-gray-50"
          >
            <span className="mb-3">
              {icon === "order" ? (
                <BoxIcon strokeWidth={1} width={32} height={32} />
              ) : icon === "wishlist" ? (
                <Heart strokeWidth={1} width={32} height={32} />
              ) : icon === "address" ? (
                <LocationEdit strokeWidth={1} width={32} height={32} />
              ) : icon === "coupon" ? (
                <Ribbon strokeWidth={1} width={32} height={32} />
              ) : (
                <Edit strokeWidth={1} width={32} height={32} />
              )}
            </span>

            <h2 className="text-gray-800 font-bold mb-1">{title}</h2>
            <p className="text-sm text-gray-500 font-light">{description}</p>
          </Link>
        ))}
      </div>
      <button
        type="button"
        className="uppercase text-white font-semibold bg-red-400 transition-colors duration-200 cursor-pointer rounded-sm hover:bg-red-500 text-sm h-12 w-75"
      >
        logout
      </button>
    </Profile>
  );
}
