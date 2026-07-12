import {
  Bookmark,
  Check,
  CheckIcon,
  ChevronDown,
  ChevronRight,
  CornerDownLeft,
  Info,
  Tag,
  Van,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const priceDetails = [
    {
      title: "Total MRP",
      value: "5,195",
    },
    {
      title: "Discount on MRP",
      value: "1,924",
    },
    {
      title: "Coupon discount",
      value: "Apply Coupon",
    },
    {
      title: "Platform fee",
      value: "23",
    },
  ];
  return (
    <section className="p-10 flex items-start">
      <div className="w-[60%] p-5 border-r border-gray-200">
        <button
          type="button"
          className="flex items-center justify-between p-5 bg-red-50 rounded-sm border border-gray-200 w-full cursor-pointer mb-3"
        >
          <div className="text-left text-gray-800 pr-5 grow w-[calc(100%-260px)]">
            <p className="mb-0.5">
              Deliver to: <b>Himanshu Rawat, 201309</b>
            </p>
            <p className="text-sm overflow-hidden text-nowrap text-ellipsis capitalize">
              RC 475, kala enclave, khoda colony, ghaziabad, Dharam public
              school & jagdamba builder, Noida
            </p>
          </div>
          <div className="uppercase p-2 border border-red-500 text-red-500 font-semibold text-sm rounded-sm w-40 shrink-0">
            Change Address
          </div>
        </button>
        <div className="flex items-center justify-between py-2 px-5 bg-white border border-gray-200 rounded-sm">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Van strokeWidth={1} />
              <span className="bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center absolute -top-1.5 -left-1.5">
                !
              </span>
            </div>
            <p className="text-sm text-gray-700">
              Item(s) not deliverable to <b>201309.</b>
            </p>
          </div>
          <button
            type="button"
            className="text-red-500 uppercase text-sm font-semibold cursor-pointer"
          >
            View
          </button>
        </div>
        <div className="flex py-5 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-4 h-4 flex items-center justify-center">
              <input
                type="checkbox"
                name="checkoutItems"
                className="w-4 h-4 cursor-pointer appearance-none border border-gray-400 rounded-xs checked:bg-pink-500 checked:border-pink-500 peer"
              />
              <Check
                width={"80%"}
                height={"80%"}
                strokeWidth={"3"}
                className="absolute pointer-events-none text-white left-1/2 top-1/2 -translate-1/2 hidden peer-checked:block"
              />
            </div>
            <span className="font-bold uppercase text-gray-700">
              2/2 items selected
            </span>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="uppercase text-gray-600 font-semibold text-sm py-1 px-8 border-r border-gray-300"
            >
              remove
            </button>
            <button
              type="button"
              className="uppercase text-gray-600 font-semibold text-sm py-1 px-8"
            >
              move to wishlist
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <div className="relative cursor-default p-3 flex items-start gap-3 border border-gray-200 rounded-sm">
            <div className="relative h-40 w-30 shrink-0">
              <Image
                src={"/modal-images/men1.jpg"}
                alt="Men modal image"
                fill
                sizes="100%"
                className="object-cover object-top"
              />
            </div>
            <div className="pl-2 w-3/4">
              <h2 className="capitalize font-bold text-gray-800">Roadster</h2>
              <Link
                href={""}
                className="text-sm text-gray-800 text-ellipsis overflow-hidden text-nowrap block"
              >
                The Roadster Life Co. Men Pure Cotton Flared Heavy Fade Jeans.
                The Roadster Life Co. Men Pure Cotton Flared Heavy Fade Jeans
              </Link>
              <p className="text-sm text-gray-400 font-light mb-2">
                Sold by: <span className="uppercase">powerlook</span>
              </p>
              <div className="flex gap-3 items-center mb-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex items-center bg-gray-100 py-1 px-2 cursor-pointer rounded-xs font-bold capitalize text-sm text-gray-800"
                  >
                    size: 40 <ChevronDown width={15} height={15} />
                  </button>
                  <button
                    type="button"
                    className="flex items-center bg-gray-100 py-1 px-2 cursor-pointer rounded-xs font-bold capitalize text-sm text-gray-800"
                  >
                    oty: 1 <ChevronDown width={15} height={15} />
                  </button>
                </div>
                <span className="text-xs font-bold text-red-400 border py-0.5 px-1 border-red-400">
                  4 left
                </span>
              </div>
              <div className="flex items-center gap-0.5 mb-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-800 font-semibold">₹675</span>{" "}
                  <span className="text-gray-500 line-through">₹2,599</span>{" "}
                  <span className="uppercase text-red-500">74% off</span>
                </div>
                <button type="button" className="cursor-pointer">
                  <Info strokeWidth={1} width={12} height={12} />
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-4 w-4 border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <CornerDownLeft
                    strokeWidth={3}
                    stroke="black"
                    width={8}
                    height={8}
                  />
                </span>
                <span className="text-xs text-gray-800">
                  <b>7 days</b> return available
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon stroke="green" width={18} height={18} />
                <span className="text-xs text-gray-800">
                  Delivery by <b>3 Jul 2026</b>
                </span>
              </div>
              {/* <p className="text-xs text-red-400 font-bold capitalize">
                not deliverable at selected pincode.
              </p> */}
            </div>
            <X
              stroke="black"
              className="absolute right-2 top-2 cursor-pointer"
              strokeWidth={1}
            />
          </div>
          <div className="relative cursor-default p-3 flex items-start gap-3 border border-red-400 rounded-sm">
            <div className="relative h-40 w-30 shrink-0">
              <Image
                src={"/modal-images/men1.jpg"}
                alt="Men modal image"
                fill
                sizes="100%"
                className="object-cover object-top"
              />
            </div>
            <div className="pl-2 w-3/4">
              <h2 className="capitalize font-bold text-gray-800">Roadster</h2>
              <Link
                href={""}
                className="text-sm text-gray-800 text-ellipsis overflow-hidden text-nowrap block mb-1"
              >
                The Roadster Life Co. Men Pure Cotton Flared Heavy Fade Jeans.
                The Roadster Life Co. Men Pure Cotton Flared Heavy Fade Jeans
              </Link>
              {/* <p className="text-sm text-gray-400 font-light mb-2">
                Sold by: <span className="uppercase">powerlook</span>
              </p> */}
              <div className="flex gap-3 items-center mb-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex items-center bg-gray-100 py-1 px-2 cursor-pointer rounded-xs font-bold capitalize text-sm text-gray-800"
                  >
                    size: 40 <ChevronDown width={15} height={15} />
                  </button>
                  <button
                    type="button"
                    className="flex items-center bg-gray-100 py-1 px-2 cursor-pointer rounded-xs font-bold capitalize text-sm text-gray-800"
                  >
                    oty: 1 <ChevronDown width={15} height={15} />
                  </button>
                </div>
                <span className="text-xs font-bold text-red-400 border py-0.5 px-1 border-red-400">
                  4 left
                </span>
              </div>
              <div className="flex items-center gap-0.5 mb-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-800 font-semibold">₹675</span>{" "}
                  <span className="text-gray-500 line-through">₹2,599</span>{" "}
                  <span className="uppercase text-red-500">74% off</span>
                </div>
                <button type="button" className="cursor-pointer">
                  <Info strokeWidth={1} width={12} height={12} />
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-4 w-4 border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <CornerDownLeft
                    strokeWidth={3}
                    stroke="black"
                    width={8}
                    height={8}
                  />
                </span>
                <span className="text-xs text-gray-800">
                  <b>7 days</b> return available
                </span>
              </div>
              <p className="text-xs text-red-400 font-bold capitalize">
                not deliverable at selected pincode.
              </p>
            </div>
            <X
              stroke="black"
              className="absolute right-2 top-2 cursor-pointer"
              strokeWidth={1}
            />
          </div>
        </div>
        <Link
          href={"/wishlist"}
          className="p-3 border border-gray-200 rounded-sm flex justify-between group"
        >
          <div className="flex items-center gap-2">
            <Bookmark strokeWidth={1} width={20} />
            <span className="font-bold text-sm capitalize text-gray-800 transition ease-in-out duration-300 group-hover:underline">
              Add more from wishlist
            </span>
          </div>
          <ChevronRight strokeWidth={2} height={21} width={21} />
        </Link>
      </div>
      <div className="w-[40%] p-5">
        <div className="py-5 border-b border-gray-200">
          <h2 className="uppercase text-sm font-semibold text-gray-600 mb-3">
            coupons
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Tag width={20} height={20} strokeWidth={1} />{" "}
              <span className="text-sm text-gray-800 font-bold capitalize">
                apply coupons
              </span>
            </div>
            <button
              type="button"
              className="uppercase py-1 px-5 border border-red-500 text-sm text-red-500 font-bold cursor-pointer transition-colors ease-in-out duration-300 hover:bg-red-100"
            >
              apply
            </button>
          </div>
        </div>
        <div className="py-5 border-b border-gray-200">
          <h2 className="text-gray-600 mb-3 font-semibold text-sm">
            <span className="uppercase">price details</span>{" "}
            <span className="capitalize">(2 items)</span>
          </h2>
          <ul className="flex flex-col gap-3">
            {priceDetails.map(({ title, value }) => (
              <li
                key={title}
                className="flex items-center justify-between text-sm text-gray-700 capitalize"
              >
                <span>
                  {title}{" "}
                  {title === "Platform fee" && (
                    <button className="font-bold text-red-500 cursor-pointer">
                      Know More
                    </button>
                  )}
                </span>{" "}
                <span
                  className={`${value === "Apply Coupon" && "text-red-500"} ${title === "Discount on MRP" && "text-green-500"}`}
                >
                  {title === "Discount on MRP" && "-"}
                  {value !== "Apply Coupon" && "₹"}
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4">
          <div className="flex items-center justify-between text-sm text-gray-700 mb-2 capitalize font-bold">
            <span>total amount</span>
            <span>₹3,192</span>
          </div>
          <p className="text-xs text-gray-800 mb-1">
            By placing the order, you agree to Fashion&apos;s{" "}
            <Link href={""} className="font-bold text-red-500">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href={""} className="font-bold text-red-500">
              Privacy Policy
            </Link>
          </p>
          <button
            type="button"
            className="uppercase text-white text-sm bg-red-500 font-bold p-3 cursor-pointer w-full transition-colors ease-in-out duration-300 hover:bg-red-600"
          >
            Place order
          </button>
        </div>
      </div>
    </section>
  );
}
