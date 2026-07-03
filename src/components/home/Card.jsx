import Image from "next/image";

export default function Card({ arrayLength }) {
  return (
    <>
      {Array.from({ length: arrayLength }).map((_, index) => (
        <div
          key={index}
          className="relative h-60 md:h-150 after:content-[''] after:absolute after:bg-black/25 after:inset-0 after:w-full after:h-full"
        >
          <Image
            className="object-cover object-top"
            src={"/modal-images/men1.jpg"}
            alt="Men modal image"
            fill
            sizes="100%"
          />
          <div className="absolute bottom-0 left-0 p-4 md:p-10 text-white z-10">
            <h3 className="mb-1 md:mb-2 font-bold text-lg md:text-2xl uppercase">
              Ethic Wear
            </h3>
            <p className="mb-2 font-semibold md:text-lg capitalize">
              50-80% off
            </p>
            <button className="bg-white text-black font-semibold border-0 px-5 py-2.5 capitalize transition-color duration-300 hover:bg-black hover:text-white cursor-pointer ease-in-out text-sm md:text-lg">
              explore now
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
