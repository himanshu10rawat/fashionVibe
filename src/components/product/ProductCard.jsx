import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Banner from "../home/Banner";

export default function ProductCard({ productList, productCategory }) {
  const banners = [
    {
      src: "/modal-images/men1.jpg",
      alt: "Man modal image",
    },
    {
      src: "/modal-images/men1.jpg",
      alt: "Man modal image",
    },
    {
      src: "/modal-images/men1.jpg",
      alt: "Man modal image",
    },
    {
      src: "/modal-images/men1.jpg",
      alt: "Man modal image",
    },
  ];
  return (
    <>
      {productList.map(
        ({
          image,
          title,
          description,
          price,
          discountPrice,
          offer,
          sizes,
          rating,
          reviews,
        }) => (
          <Link
            href={`${productCategory}/${title
              .toLowerCase()
              .split("")
              .map((item) => (item === " " ? "-" : item))
              .join("")}`}
            key={title}
            className="bg-white transition-all duration-300 ease-in-out cursor-pointer group hover:shadow-xl hover:shadow-gray-200"
          >
            <div className="relative h-70 group-hover:hidden">
              <Image
                src={image}
                alt={description}
                fill
                sizes="100%"
                className="object-cover object-top"
              />
              <div className="py-1 px-2 bg-white/70 rounded-xs absolute w-min flex items-center text-xs font-bold gap-1.5 bottom-2 left-3">
                <span className="flex items-center gap-1">
                  {rating}{" "}
                  <Star fill="green" stroke="0" width={14} height={14} />
                </span>
                |{" "}
                <span>
                  {reviews > 999 ? `${String(reviews).charAt(0)}k+` : reviews}
                </span>
              </div>
            </div>
            <div className="hidden group-hover:block">
              <Banner banners={banners} duration={1500} height={240} />
            </div>
            <div className="p-2">
              <h3 className="font-bold text-gray-800 mb-1 group-hover:hidden">
                {title}
              </h3>
              <button
                type="button"
                className="border border-gray-300 p-1.5 items-center justify-center gap-1.5 w-full uppercase mb-2 text-xs font-semibold hidden group-hover:flex"
              >
                <Heart strokeWidth="1" width={18} height={18} />
                <span className="tracking-wide">wishlist</span>
              </button>
              <p className="font-light text-gray-600 mb-1.5 text-sm capitalize text-nowrap text-ellipsis overflow-hidden group-hover:hidden">
                {description}
              </p>
              <p className="font-light text-gray-600 mb-1.5 text-sm capitalize text-nowrap text-ellipsis overflow-hidden hidden group-hover:block">
                Sizes: {sizes}
              </p>
              <p className="flex gap-1.5 items-end">
                <span className="font-bold text-gray-800 text-sm">{price}</span>
                <span className="font-light text-gray-600 line-through text-xs">
                  {discountPrice}
                </span>
                <span className="font-light uppercase text-orange-600 text-xs">
                  ({offer})
                </span>
              </p>
            </div>
          </Link>
        ),
      )}
    </>
  );
}
