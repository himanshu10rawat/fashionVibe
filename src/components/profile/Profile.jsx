"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Profile({ children }) {
  const pathname = usePathname();
  console.log("pathname:", pathname);

  const profileNavList = [
    {
      list: [
        {
          item: "overview",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "orders",
      list: [
        {
          item: "orders & returns",
          url: "/orders",
        },
      ],
    },
    {
      title: "accounts",
      list: [
        {
          item: "profile",
          url: "/profile",
        },
        {
          item: "My wallet",
          url: "/my-wallet",
        },
        {
          item: "addresses",
          url: "/address",
        },
        {
          item: "delete account",
          url: "/delete",
        },
      ],
    },
    {
      title: "legal",
      list: [
        {
          item: "terms of use",
          url: "/terms-of-use",
        },
        {
          item: "privacy center",
          url: "/personal-data-consent",
        },
      ],
    },
  ];
  return (
    <section className="py-10 px-25 xl:py-20 xl:px-50">
      <div className="pb-2 border-b border-gray-300">
        <h1 className="text-lg capitalize font-bold text-gray-800">Account</h1>
        <p className="text-sm text-gray-600">Himanshu Rawat</p>
      </div>
      <div className="flex">
        <aside className="w-50 border-r border-gray-300 stroke-0">
          {profileNavList.map(({ title, list }, index, arr) => (
            <div
              key={index}
              className={`py-5 ${index !== arr.length - 1 && "border-b border-gray-300"}`}
            >
              {title && (
                <h2 className="text-xs text-gray-500 uppercase mb-3">
                  {title}
                </h2>
              )}
              <ul className="flex flex-col gap-1">
                {list.map(({ item, url }) => (
                  <li key={item}>
                    <Link
                      className={`capitalize text-gray-700 font-light transition-colors duration-300 ease-in-out hover:font-semibold ${pathname.includes(url) && "text-green-500 font-semibold"}`}
                      href={url}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
        <main className="grow p-5">{children}</main>
      </div>
    </section>
  );
}
