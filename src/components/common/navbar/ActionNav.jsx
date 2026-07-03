import { Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function ActionNav() {
  const profileItems = {
    username: "Himanshu",
    mobile: "9217656745",
    profileUrl: "/profile",
    profileDetails: [
      {
        title: "Orders",
        url: "/orders",
      },
      {
        title: "Wishlist",
        url: "/wishlist",
      },
      {
        title: "Contact Us",
        url: "/contact-us",
      },
      {
        title: "Coupons",
        url: "/coupons",
      },
      {
        title: "Saved Addresses",
        url: "/address",
      },
      {
        title: "Edit profile",
        url: "/profile/edit",
      },
    ],
  };
  return (
    <div className="flex">
      <div className="relative group">
        <div className="py-4.5 px-5 relative overflow-hidden after:content-[''] after:absolute after:h-1 after:w-0 after:bg-orange-500 after:bottom-0 after:left-0 after:transition-all after:duration-200 group-hover:after:w-full">
          <User className="w-4 h-4 md:w-5 md:h-5 stroke-1 mx-auto" />
          <span className="text-xs md:text-sm inline-block">Profile</span>
        </div>
        <div className="p-5 w-80 absolute left-1/2 -translate-x-1/2 top-20 hidden  group-hover:block bg-white shadow-lg shadow-gray-300">
          <Link
            href={profileItems.profileUrl}
            className="block border-b border-gray-200 pb-1 mb-2"
          >
            <span className="block text-gray-700 mb-0.5">
              <b>Hello {profileItems.username}</b>
            </span>
            <span className="block text-gray-600 text-sm">
              {profileItems.mobile}
            </span>
          </Link>
          {profileItems.profileDetails.map(({ title, url }) => (
            <Link
              className="block text-sm text-gray-600 capitalize py-1.5 transition-colors hover:font-bold"
              key={title}
              href={url}
            >
              {title}
            </Link>
          ))}
          <button
            type="button"
            className="block text-sm text-gray-600 capitalize pt-2 border-t border-gray-200 mt-2 w-full text-left"
          >
            logout
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link className="block" href={"/wishlist"}>
          <Heart className="w-4 h-4 md:w-5 md:h-5 stroke-1 mx-auto" />
          <span className="text-xs md:text-sm">Wishlist</span>
        </Link>
        <Link className="block" href={"/checkout/cart"}>
          <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 stroke-1 mx-auto" />
          <span className="text-xs md:text-sm">Bag</span>
        </Link>
      </div>
    </div>
  );
}
