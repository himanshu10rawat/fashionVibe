import Image from "next/image";

export default function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="relative h-150 after:content-[''] after:absolute after:bg-black/25 after:inset-0 after:w-full after:h-full">
        <Image
          className="object-cover object-top"
          src={"/modal-images/men1.jpg"}
          alt="Men modal image"
          fill
          sizes="100%"
        />
        <div className="absolute bottom-0 left-0 p-10 text-white z-10">
          <h3 className="mb-2 font-bold text-2xl uppercase">Ethic Wear</h3>
          <p className="mb-2 font-semibold text-lg capitalize">50-80% off</p>
          <button className="bg-white text-black font-semibold border-0 px-5 py-2.5 capitalize transition-color duration-300 hover:bg-black hover:text-white cursor-pointer ease-in-out">
            explore now
          </button>
        </div>
      </div>
      <div className="relative h-150 after:content-[''] after:absolute after:bg-black/25 after:inset-0 after:w-full after:h-full">
        <Image
          className="object-cover object-top"
          src={"/modal-images/women1.jpg"}
          alt="Women modal image"
          fill
          sizes="100%"
        />
        <div className="absolute bottom-0 left-0 p-10 text-white z-10">
          <h3 className="mb-2 font-bold text-2xl uppercase">Casual Wear</h3>
          <p className="mb-2 font-semibold text-lg capitalize">40-80% off</p>
          <button className="bg-white text-black font-semibold border-0 px-5 py-2.5 capitalize transition-color duration-300 hover:bg-black hover:text-white cursor-pointer ease-in-out">
            explore now
          </button>
        </div>
      </div>
      <div className="relative h-150 after:content-[''] after:absolute after:bg-black/25 after:inset-0 after:w-full after:h-full">
        <Image
          className="object-cover object-top"
          src={"/modal-images/men2.jpg"}
          alt="Men modal image 2"
          fill
          sizes="100%"
        />
        <div className="absolute bottom-0 left-0 p-10 text-white z-10">
          <h3 className="mb-2 font-bold text-2xl uppercase">
            Men&apos;s Activewear
          </h3>
          <p className="mb-2 font-semibold text-lg capitalize">30-80% off</p>
          <button className="bg-white text-black font-semibold border-0 px-5 py-2.5 capitalize transition-color duration-300 hover:bg-black hover:text-white cursor-pointer ease-in-out">
            explore now
          </button>
        </div>
      </div>
      <div className="relative h-150 after:content-[''] after:absolute after:bg-black/25 after:inset-0 after:w-full after:h-full">
        <Image
          className="object-cover object-top"
          src={"/modal-images/women2.jpg"}
          alt="Women modal image 2"
          fill
          sizes="100%"
        />
        <div className="absolute bottom-0 left-0 p-10 text-white z-10">
          <h3 className="mb-2 font-bold text-2xl uppercase">
            Women&apos;s Activewear
          </h3>
          <p className="mb-2 font-semibold text-lg capitalize">30-80% off</p>
          <button className="bg-white text-black font-semibold border-0 px-5 py-2.5 capitalize transition-color duration-300 hover:bg-black hover:text-white cursor-pointer ease-in-out">
            explore now
          </button>
        </div>
      </div>
      <div className="relative h-150 after:content-[''] after:absolute after:bg-black/25 after:inset-0 after:w-full after:h-full">
        <Image
          className="object-cover object-top"
          src={"/modal-images/men3.jpg"}
          alt="Men modal image 3"
          fill
          sizes="100%"
        />
        <div className="absolute bottom-0 left-0 p-10 text-white z-10">
          <h3 className="mb-2 font-bold text-2xl uppercase">Innerwear</h3>
          <p className="mb-2 font-semibold text-lg capitalize">up to 70% off</p>
          <button className="bg-white text-black font-semibold border-0 px-5 py-2.5 capitalize transition-color duration-300 hover:bg-black hover:text-white cursor-pointer ease-in-out">
            explore now
          </button>
        </div>
      </div>
    </div>
  );
}
