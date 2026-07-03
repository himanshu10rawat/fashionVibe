import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WishlistCard({ wishlistItems }) {
  return (
    <>
      {wishlistItems.map(
        ({ id, image, title, price, discountPrice, offer }) => (
          <div key={id} className="border border-gray-200 relative">
            <Link href={""} className="relative h-70 w-full block">
              <Image
                src={image}
                alt={title}
                fill
                sizes="100%"
                className="object-cover object-top"
              />
            </Link>
            <div className="pt-2 pb-5 px-3 text-center">
              <div className="text-gray-800 mb-2 overflow-hidden text-nowrap text-ellipsis">
                {title}
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="text-gray-800 font-bold">{price}</span>{" "}
                <span className="text-gray-600 line-through text-xs">
                  {discountPrice}
                </span>{" "}
                <span className="font-semibold text-orange-400 text-xs">
                  ({offer})
                </span>
              </div>
            </div>
            <Link
              href={"/checkout/cart"}
              className="p-3 font-bold text-red-400 w-full block text-center border-t border-gray-200 uppercase cursor-pointer text-sm"
            >
              move to bag
            </Link>
            <span className="absolute top-2 right-2 bg-white rounded-full p-0.5 border border-gray-200 cursor-pointer">
              <X strokeWidth={1} width={18} height={18} />
            </span>
          </div>
        ),
      )}
    </>
  );
}
