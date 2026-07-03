import Image from "next/image";
import Link from "next/link";

export default function CategoriesCard({ arrayLength }) {
  return (
    <>
      {Array.from({ length: arrayLength }).map((_, index) => (
        <Link key={index} href={""} className="block text-center">
          <div className="w-min p-1 bg-linear-to-r from-orange-500 via-red-500 to-purple-500 rounded-full mx-auto">
            <div className="relative h-45 w-45 overflow-hidden rounded-full">
              <Image
                src={"/modal-images/women1.jpg"}
                alt="Women modal image"
                fill
                sizes="100%"
                className="object-cover object-top rounded-full block transition-transform ease-in-out duration-500 hover:scale-125"
              />
            </div>
          </div>
          <h3 className="mt-2 font-semibold text-xl text-gray-700">Dresses</h3>
        </Link>
      ))}
    </>
  );
}
