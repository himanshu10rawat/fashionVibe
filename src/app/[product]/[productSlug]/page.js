import PincodeInput from "@/components/productDetails/PincodeInput";
import ProductCard from "@/components/product/ProductCard";
import {
  ChevronRightIcon,
  Heart,
  Notebook,
  ShoppingBag,
  Star,
  Tag,
  ThumbsDown,
  ThumbsUp,
  Van,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function productDetails({ params }) {
  const { productSlug } = await params;

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i),
  );

  const productName = productSlug
    .split("")
    .map((slug) =>
      slug === "-"
        ? " "
        : ["%"].includes(slug)
          ? "&"
          : !alphabet.includes(slug)
            ? ""
            : slug,
    )
    .join("");

  const specifications = [
    { label: "Sleeve Length", value: "Long Sleeves" },
    { label: "Shape", value: "A-Line" },
    { label: "Neck", value: "Mandarin Collar" },
    { label: "Design Styling", value: "Regular" },
    { label: "Slit Detail", value: "Side Slits" },
    { label: "Length", value: "Above Knee" },
    { label: "Hemline", value: "Straight" },
    { label: "Colour Family", value: "Monochrome" },
    { label: "Weave Pattern", value: "Regular" },
    { label: "Weave Type", value: "Machine Weave" },
    { label: "Number of Items", value: "1" },
    { label: "Package Contains", value: "1 Kurta" },
    { label: "Net Quantity", value: "1" },
  ];

  const ratting = [
    {
      rattingNumber: "5",
      rattingPercent: "70",
      rattingCount: "130",
    },
    {
      rattingNumber: "4",
      rattingPercent: "20",
      rattingCount: "31",
    },
    {
      rattingNumber: "3",
      rattingPercent: "10",
      rattingCount: "12",
    },
    {
      rattingNumber: "2",
      rattingPercent: "4",
      rattingCount: "4",
    },
    {
      rattingNumber: "1",
      rattingPercent: "18",
      rattingCount: "25",
    },
  ];

  const productList = [
    {
      image: "/modal-images/men1.jpg",
      title: "Austin Wood",
      description: "Men striped polo collar t-shirt collection",
      price: "Rs. 413",
      discountPrice: "Rs. 1499",
      offer: "72% off",
      const: "M",
      rating: 4.2,
      reviews: 1832,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Roadster",
      description: "Men slim fit casual cotton shirt",
      price: "Rs. 539",
      discountPrice: "Rs. 1799",
      offer: "70% off",
      const: "L",
      rating: 4.5,
      reviews: 3421,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "H&M",
      description: "Men regular fit crew neck sweatshirt",
      price: "Rs. 799",
      discountPrice: "Rs. 2499",
      offer: "68% off",
      const: "XL",
      rating: 4.1,
      reviews: 987,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Puma",
      description: "Men solid round neck sports t-shirt",
      price: "Rs. 629",
      discountPrice: "Rs. 1999",
      offer: "69% off",
      const: "S",
      rating: 4.3,
      reviews: 2154,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Nike",
      description: "Men dri-fit training polo t-shirt",
      price: "Rs. 999",
      discountPrice: "Rs. 2999",
      offer: "67% off",
      const: "XL",
      rating: 4.6,
      reviews: 5643,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Levis",
      description: "Men washed denim casual shirt",
      price: "Rs. 874",
      discountPrice: "Rs. 2799",
      offer: "69% off",
      const: "M",
      rating: 4.4,
      reviews: 3876,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Arrow",
      description: "Men formal slim fit printed shirt",
      price: "Rs. 749",
      discountPrice: "Rs. 2499",
      offer: "70% off",
      const: "L",
      rating: 4.0,
      reviews: 1243,
    },
    {
      image: "/modal-images/men1.jpg",
      title: "Peter England",
      description: "Men self design mandarin collar kurta",
      price: "Rs. 649",
      discountPrice: "Rs. 2199",
      offer: "70% off",
      const: "M",
      rating: 3.9,
      reviews: 876,
    },
  ];

  return (
    <>
      <section className="flex p-6 items-start">
        <div className="w-[55%] grid grid-cols-2 gap-2.5 sticky top-20 self-start">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="relative w-full h-80 lg:h-110 xl:h-140 overflow-hidden"
            >
              <Image
                src={"/modal-images/men1.jpg"}
                alt="Man modal image"
                fill
                sizes="100%"
                className="object-cover object-center cursor-zoom-in transition-transform ease-in-out duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="w-[45%] pl-6">
          <div className="border-b border-gray-200 pb-3">
            <h1 className="capitalize font-bold text-2xl text-gray-800 mb-0.5">
              {productName}
            </h1>
            <h2 className="capitalize font-normal text-xl text-gray-500 mb-2">
              Tribal Print Pure Cotton Coat
            </h2>
            <button
              type="button"
              className="flex items-center py-0.5 px-2 gap-2 border border-gray-200 text-gray-400 cursor-pointer transition-colors ease-in-out duration-300 hover:border-gray-600"
            >
              <span className="flex items-center gap-0.5 font-bold text-gray-800">
                4.2 <Star width={16} height={16} stroke="0" fill="green" />
              </span>
              |<span className="text-gray-600">206 Ratings</span>
            </button>
          </div>
          <div className="py-5 border-b border-gray-200">
            <div className="uppercase flex items-center gap-2 text-xl mb-2">
              <span className="text-gray-800 font-bold">₹619</span>
              <span className="text-gray-500">
                mrp <span className="line-through">₹1699</span>
              </span>
              <span className="text-orange-400 font-bold">(64% off)</span>
            </div>
            <div className="font-bold text-sm text-green-600 mb-5">
              inclusive of all taxes
            </div>
            <div className="flex items-center gap-6 uppercase mb-5">
              <h2 className="text-gray-800 font-bold">Select size</h2>
              <button
                type="button"
                className="flex gap-1 items-center text-sm text-pink-500 font-bold uppercase cursor-pointer transition-transform ease-in-out duration-300 hover:translate-x-0.5"
              >
                Size chart <ChevronRightIcon width={16} height={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 mb-5">
              {["s", "m", "l", "xl", "xxl"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="w-12 h-12 border border-gray-400 font-semibold uppercase rounded-full text-sm cursor-pointer transition-colors ease-in-out duration-300 hover:border-pink-500"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <button
                type="button"
                className="bg-red-500 border border-red-500 text-white p-4 flex items-center gap-2 rounded-sm grow justify-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-red-400"
              >
                <ShoppingBag strokeWidth={1} width={20} height={20} />
                <span className="uppercase font-bold">Add to bag</span>
              </button>
              <button
                type="button"
                className="border border-gray-300 text-gray-700 p-4 flex items-center gap-2 rounded-sm grow justify-center cursor-pointer transition-colors duration-300 ease-in-out hover:border-gray-600"
              >
                <Heart strokeWidth={1} width={20} height={20} />
                <span className="uppercase font-bold">wishlist</span>
              </button>
            </div>
          </div>
          <div className="py-5 border-b border-gray-200">
            <div className="uppercase flex items-center gap-2 mb-1">
              <span className="text-gray-800 font-bold">₹619</span>
              <span className="text-gray-500 line-through">₹1699</span>
              <span className="text-orange-400 font-bold">(64% off)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-800">Seller:</span>{" "}
              <button
                type="button"
                className="text-pink-500 font-bold cursor-pointer"
              >
                M K TAILORING House
              </button>
            </div>
          </div>
          <div className="py-5 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-bold text-gray-800 uppercase">
                Delivery Options
              </h2>{" "}
              <Van strokeWidth={1} />
            </div>
            <PincodeInput />
            <p className="text-sm text-gray-600 mb-5">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            <ul className="flex flex-col gap-1 mb-8">
              <li className="text-gray-800">100% Original Products</li>
              <li className="text-gray-800">
                Pay on delivery might be available
              </li>
              <li className="text-gray-800">
                Easy 7 days returns and exchanges
              </li>
            </ul>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-bold text-gray-800 uppercase">BEST OFFERS</h2>{" "}
              <Tag strokeWidth={1} width={16} height={16} />
            </div>
            <div className="mb-5">
              <h3 className="font-bold mb-1">
                <span className="text-gray-800">Best Price:</span>{" "}
                <span className="text-orange-500">Rs. 433</span>
              </h3>
              <ul className=" list-disc mb-2 flex flex-col gap-1.5 pl-5">
                <li className="text-gray-800">
                  Applicable on: Orders above Rs. 300 (only on first purchase)
                </li>
                <li className="text-gray-800">
                  Coupon code: <b>MYNTRAEXCLUSIVE1</b>
                </li>
                <li className="text-gray-800">
                  Coupon Discount: 30% off (Your total saving: Rs. 1266)
                </li>
              </ul>
              <Link href={""} className="font-bold text-sm text-red-500">
                View Eligible Products
              </Link>
            </div>
            <div className="mb-5">
              <h3 className="font-bold mb-1 text-gray-800">
                10% Instant Discount on BOBCARD Credit Card
              </h3>
              <ul className=" list-disc mb-2 flex flex-col gap-1.5 pl-5">
                <li className="text-gray-800">
                  Min Spend ₹3,500 Max Discount ₹1,000
                </li>
              </ul>
              <Link href={""} className="font-bold text-sm text-red-500">
                Terms & Condition
              </Link>
            </div>
            <div className="mb-5">
              <h3 className="font-bold mb-1 text-gray-800">
                10% Instant Discount on BOBCARD Credit Card EMI
              </h3>
              <ul className=" list-disc mb-2 flex flex-col gap-1.5 pl-5">
                <li className="text-gray-800">
                  Min Spend ₹3,500 Max Discount ₹1,200
                </li>
              </ul>
              <Link href={""} className="font-bold text-sm text-red-500">
                Terms & Condition
              </Link>
            </div>
          </div>
          <div className="py-5 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-bold text-gray-800 uppercase">
                Product Details
              </h2>{" "}
              <Notebook strokeWidth={1} width={20} height={20} />
            </div>
            <div className="mb-5">
              <h3 className="font-bold text-gray-800 capitalize">
                about the brand
              </h3>
              <p className="font-normal text-gray-800">
                Sangria is a ready-to-wear brand that focuses on a global Indian
                wear. Sangria has a unique signature style with an electric
                collection of fabrics, colors, and patterns. The brand has a
                modern take on traditional Indian motifs and designs with a wide
                range of offerings.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="font-bold text-gray-800 capitalize">
                product description
              </h3>
              <p className="font-normal text-gray-800">
                This kurta is a must-have in your closet. With the breezy
                silhouette and tribal print and pattern, this shirt will become
                your favourite go-to outfit. Top it off with mojaris or casual
                shoes for an aesthetic look.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="font-bold text-gray-800">Product Details:</h3>
              <ul className="font-normal text-gray-800 flex flex-col gap-1">
                <li>Colour: black and white</li>
                <li>Tribal printed</li>
                <li>Mandarin collar</li>
                <li>Long, regular sleeves</li>
                <li>A-line shape with regular style</li>
                <li>Above knee with straight hem</li>
                <li>Machine weave regular cotton</li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="font-bold text-gray-800">Size & Fit</h3>
              <p className="font-normal text-gray-800">
                The model (height 6&apos;) is wearing a size M
              </p>
            </div>
            <div className="mb-5">
              <h3 className="font-bold text-gray-800">Material & Care</h3>
              <ul className="font-normal text-gray-800 flex flex-col gap-1">
                <li>100% Cotton</li>
                <li>Machine wash</li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="font-bold text-gray-800">Specifications</h3>
              <ul className="font-normal text-gray-800 grid grid-cols-2 gap-x-15">
                {specifications.map(({ label, value }) => (
                  <li key={label} className="border-b border-gray-200 py-2">
                    <h3 className="text-xs text-gray-500">{label}</h3>
                    <p className="text-gray-800">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-5 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-bold text-gray-800 uppercase">Ratings</h2>{" "}
              <Star strokeWidth={1} width={20} height={20} />
            </div>
            <div className="flex items-center">
              <div className="py-3 pr-10 border-r border-gray-200">
                <div className="flex gap-4 items-baseline mb-4">
                  <span className="text-5xl text-gray-700">4.2</span>
                  <Star strokeWidth={0} fill="green" height={26} width={26} />
                </div>
                <p className="text-gray-600 text-sm">206 Verified Buyers</p>
              </div>
              <div className="pl-10">
                <ul className="flex flex-col gap-1">
                  {ratting.map(
                    ({ rattingNumber, rattingPercent, rattingCount }) => (
                      <li
                        key={`ratting-number-${rattingNumber}`}
                        className="flex items-center gap-2"
                      >
                        <div className="flex gap-0.5 items-center ">
                          <span className="text-gray-400 text-sm">
                            {rattingNumber}
                          </span>
                          <Star
                            strokeWidth={0}
                            fill="lightGray"
                            width={15}
                            height={15}
                          />
                        </div>
                        <div className="w-40 h-1 bg-gray-200 relative">
                          <span
                            style={{ "--progress-width": `${rattingPercent}%` }}
                            className={`w-(--progress-width) ${rattingNumber === "5" ? "bg-green-600" : rattingNumber === "4" ? "bg-green-600" : rattingNumber === "3" ? "bg-green-400" : rattingNumber === "2" ? "bg-yellow-400" : "bg-red-400"}  inline-block h-1 absolute left-0 top-0`}
                          ></span>
                        </div>
                        <div className="text-gray-600 text-sm">
                          {rattingCount}
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-gray-800 uppercase mb-2">
              Customer Photos (24)
            </h2>
            <div className="flex flex-nowrap items-center gap-3 mb-7">
              {Array.from({ length: 24 }).map((_, i, arr) => (
                <button
                  key={i}
                  className={`h-20 w-20 cursor-pointer relative ${i > 3 && "hidden"}`}
                >
                  <Image
                    src={"/modal-images/men1.jpg"}
                    alt="Men modal image"
                    fill
                    sizes="100%"
                    className="object-cover object-top"
                  />
                  {i === 3 && (
                    <span className="absolute bg-black/75 inset-0 text-white flex items-center justify-center font-bold">
                      +{arr.length - 3}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <h2 className="font-bold text-gray-800 uppercase">
              Customer Reviews (247)
            </h2>
            <ul className="flex flex-col">
              <li className="border-b border-gray-200 py-5 flex gap-3 items-start">
                <div className="bg-green-400 text-white p-1 rounded-xs flex items-center text-sm font-bold">
                  4 <Star fill="white" strokeWidth={0} width={14} height={14} />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    It&apos;s a good tshirt. Colour is the same which is
                    depicted on Myntra site, fit and finish is awesome but just
                    a little tight around the neck. Putting on taking off for a
                    Sikh guy with Patka or turban is not easy
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">
                      Devinder Pal Singh | 21 June 2024
                    </span>
                    <div className="flex items-center gap-10">
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <ThumbsUp
                          strokeWidth={1}
                          width={16}
                          height={16}
                          stroke="gray"
                          className="scale-x-[-1]"
                        />{" "}
                        <span>2</span>
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <ThumbsDown
                          strokeWidth={1}
                          width={16}
                          height={16}
                          stroke="gray"
                          className="scale-x-[-1]"
                        />{" "}
                        <span>0</span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-b border-gray-200 py-5 flex gap-3 items-start">
                <div className="bg-green-400 text-white p-1 rounded-xs flex items-center text-sm font-bold">
                  4 <Star fill="white" strokeWidth={0} width={14} height={14} />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    It&apos;s a good tshirt. Colour is the same which is
                    depicted on Myntra site, fit and finish is awesome but just
                    a little tight around the neck. Putting on taking off for a
                    Sikh guy with Patka or turban is not easy
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">
                      Devinder Pal Singh | 21 June 2024
                    </span>
                    <div className="flex items-center gap-10">
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <ThumbsUp
                          strokeWidth={1}
                          width={16}
                          height={16}
                          stroke="gray"
                          className="scale-x-[-1]"
                        />{" "}
                        <span>2</span>
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <ThumbsDown
                          strokeWidth={1}
                          width={16}
                          height={16}
                          stroke="gray"
                          className="scale-x-[-1]"
                        />{" "}
                        <span>0</span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-1 pb-5">
            <button
              type="button"
              className="text-sm font-bold text-pink-500 mb-5 cursor-pointer transition-transform ease-in-out duration-300 hover:translate-x-1"
            >
              View all 247 reviews
            </button>
            <p className="text-gray-800 mb-3">
              Product Code: <b>18389716</b>
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-800">Seller:</span>
              <button
                type="button"
                className="font-bold text-pink-500 uppercase cursor-pointer"
              >
                Panchanan international private limited
              </button>
            </div>
            <button
              type="button"
              className="text-sm font-bold cursor-pointer text-gray-800"
            >
              View Supplier Information
            </button>
          </div>
        </div>
      </section>
      <section className="p-6">
        <h2 className="uppercase text-gray-800 font-bold mb-5">
          SIMILAR PRODUCTS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <ProductCard productList={productList} productCategory={"men"} />
        </div>
      </section>
    </>
  );
}
