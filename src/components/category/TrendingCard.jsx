import Image from "next/image";
import Link from "next/link";

export default function TrendingCard({ arrayLength }) {
  return (
    <>
      {Array.from({ length: arrayLength }).map((_, index) => (
        <Link
          href={""}
          key={index}
          className="block bg-white transition-shadow ease-in-out duration-300 hover:shadow-lg hover:shadow-gray-200 group"
        >
          <div className="relative h-70 overflow-hidden">
            <Image
              src={"/modal-images/men1.jpg"}
              alt="Men modal image"
              fill
              sizes="100%"
              className="object-cover object-top transition-transform ease-in-out duration-300 group-hover:scale-125"
            />
          </div>
          <div className="px-2 pt-2 pb-4">
            <h3 className="capitalize font-semibold text-lg text-gray-700">
              Neutral Shades
            </h3>
            <p className="text-sm font-normal text-gray-600 mb-1 tracking-wide">
              Give your staples a snazzy makeover!
            </p>
            <p className="text-xs font-light text-gray-500">+ Explore</p>
          </div>
        </Link>
      ))}
    </>
  );
}
