import { Heart, ShoppingBag, ShoppingBagIcon, User } from "lucide-react";

export default function ActionNav() {
  return (
    <div className="flex items-center gap-5">
      <button className="flex flex-col items-center">
        <User className="w-4 h-4 md:w-5 md:h-5 stroke-1" />
        <span className="text-xs md:text-sm">Profile</span>
      </button>
      <button className="flex flex-col items-center">
        <Heart className="w-4 h-4 md:w-5 md:h-5 stroke-1" />
        <span className="text-xs md:text-sm">Wishlist</span>
      </button>
      <button className="flex flex-col items-center">
        <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 stroke-1" />
        <span className="text-xs md:text-sm">Bag</span>
      </button>
    </div>
  );
}
