import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b border-gray-300 pb-5">
        <div>
          <h2 className="text-black uppercase font-semibold text-lg mb-4">
            <Link href={"/online-shopping"}>online shopping</Link>
          </h2>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shop/men"}>men</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shop/women"}>women</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shop/kids"}>kids</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shop/home"}>home</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shop/beauty"}>beauty</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shop/genz"}>genz</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shop/gift-cards"}>gift cards</Link>
          </p>
        </div>
        <div>
          <h2 className="text-black uppercase font-semibold text-lg mb-4">
            <span>useful links</span>
          </h2>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/blog"}>blog</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/careers"}>careers</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/site-map"}>site map</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/corporate-information"}>corporate information</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/whitehat"}>whitehat</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/cleartrip"}>cleartrip</Link>
          </p>
        </div>
        <div>
          <h2 className="text-black uppercase font-semibold text-lg mb-4">
            <span>customer policies</span>
          </h2>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/contact-us"}>contact us</Link>
          </p>
          <p className="text-gray-500 uppercase text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/faqs"}>faq</Link>
          </p>
          <p className="text-gray-500 uppercase text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/tac"}>t&c</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/terms-of-use"}>terms of use</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/track-orders"}>track orders</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/shipping"}>shipping</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/cancellation"}>cancellation</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/privacy-policy"}>privacy policy</Link>
          </p>
        </div>
        <div>
          <h2 className="text-black uppercase font-semibold text-lg mb-4">
            <span>popular search</span>
          </h2>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/makeup"}>makeup</Link>
          </p>
          <p className="text-gray-500 uppercase text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/dresses-for-girls"}>dresses for girls</Link>
          </p>
          <p className="text-gray-500 uppercase text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/t-shirts"}>t-shirts</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/sandals"}>sandals</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/headphones"}>headphones</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/blazers-for-men"}>blazers for men</Link>
          </p>
          <p className="text-gray-500 capitalize text-lg mb-2 transition-colors duration-300 ease-in-out hover:text-black">
            <Link href={"/handbags"}>handbags</Link>
          </p>
        </div>
      </div>
      <div className="pt-5 flex justify-between flex-wrap gap-5">
        <span className="text-lg text-gray-500">
          In case of any concern,{" "}
          <Link href={"contact-us"} className="font-bold text-blue-600">
            Contact Us
          </Link>
        </span>
        <span className="text-lg text-gray-500">
          @2026 www.fashion.com. All rights reserved.
        </span>
        <span className="text-lg text-gray-500">
          <Link href={"/"}>A Fashion Company</Link>
        </span>
      </div>
    </footer>
  );
}
