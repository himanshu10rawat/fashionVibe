"use client";

import Link from "next/link";
import links from "./links";
import { Fragment, useState } from "react";

export default function NavLinks() {
  const [hoverValue, setHoverValue] = useState("");
  const hoveredNavList = links.find(
    (link) => link.item === hoverValue.toLowerCase(),
  );

  return (
    <>
      <nav>
        <ul className="flex">
          {links.map(({ item, url }) => (
            <li className="text-xs md:text-sm" key={item}>
              <Link
                className={`relative block md:py-7 lg:py-7.5 md:px-3 lg:px-4 after:content-[''] after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 ${hoverValue === item && "after:w-full"} ${item === "men" ? "after:bg-pink-600" : item === "women" ? "after:bg-pink-400" : item === "kids" ? "after:bg-orange-500" : item === "home" ? "after:bg-yellow-500" : "after:bg-green-500"}`}
                onMouseEnter={() => setHoverValue(item)}
                onMouseLeave={() => setHoverValue("")}
                href={`/shop/${url}`}
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {hoverValue && (
        <div className="w-full absolute top-20.25 left-0 z-50 h-[calc(100dvh-80px)] bg-black/50 flex justify-center">
          <div
            onMouseEnter={() => setHoverValue(hoverValue)}
            onMouseLeave={() => setHoverValue("")}
            className="bg-white px-10 py-5 flex flex-col flex-wrap h-[75dvh] w-[90%] lg:w-[80%] overflow-auto"
          >
            {hoveredNavList &&
              hoveredNavList.categories.map((category) => {
                return (
                  <Fragment key={category.title}>
                    <div className="w-1/5 px-2 pb-2">
                      <Link
                        className={`text-sm capitalize font-semibold mb-2 inline-block ${hoverValue === "men" ? "text-pink-600" : hoverValue === "women" ? "text-pink-400" : hoverValue === "kids" ? "text-orange-500" : hoverValue === "home" ? "text-yellow-500" : "text-green-500"}`}
                        href={`/${category.url}`}
                      >
                        {category.title}
                      </Link>

                      <div className="flex flex-col">
                        {category.subCategories &&
                          category.subCategories.map((subcategory) => (
                            <Link
                              className="text-sm capitalize mb-2 transition hover:font-semibold"
                              key={subcategory.item}
                              href={`/${subcategory.url}`}
                            >
                              {subcategory.item}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
