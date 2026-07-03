import Image from "next/image";
import Link from "next/link";

export default function LuxCard({ arrayLength }) {
  return (
    <>
      {Array.from({ length: arrayLength }).map((_, index) => (
        <Link
          key={index}
          href={""}
          className="relative h-75 border-4 border-black overflow-hidden"
        >
          <Image
            src={"/modal-images/women1.jpg"}
            alt="Women modal image"
            fill
            sizes="100%"
            className="object-cover object-top transition-transform ease-in-out duration-300 hover:scale-125"
          />
        </Link>
      ))}
    </>
  );
}
