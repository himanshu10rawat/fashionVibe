import Image from "next/image";
import Link from "next/link";

export default function TopBrandCard({ arrayLength }) {
  return (
    <>
      {Array.from({ length: arrayLength }).map((_, index) => (
        <Link
          key={index}
          href={""}
          className="shadow-lg shadow-gray-200 bg-white rounded-md block cursor-pointer transition-all ease-in-out duration-300 hover:shadow-2xl hover:shadow-gray-300 hover:-translate-y-2"
        >
          <div className="relative h-80 overflow-hidden rounded-t-md">
            <Image
              src={"/modal-images/men1.jpg"}
              alt="Men modal image"
              fill
              sizes="100%"
              className="object-cover object-top"
            />
          </div>
          <div className="p-5 text-center">
            <h3 className="mb-2 text-xl text-gray-700">Logos</h3>
            <p className="font-semibold text-3xl text-gray-700">30-60% Off</p>
          </div>
        </Link>
      ))}
    </>
  );
}
