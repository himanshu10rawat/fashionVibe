"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function Shorting() {
  const sortOptions = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
    "Customer Rating",
  ];

  const [shortBy, setShortBy] = useState("Recommended");

  return (
    <div className="relative w-70 group">
      <div className="flex items-center justify-between bg-white border border-gray-300 py-2 px-3 text-sm font-normal text-gray-800">
        <div>
          Sort by : <span className="font-semibold">{shortBy}</span>
        </div>
        <ChevronDownIcon strokeWidth={1} />
      </div>
      <ul className="bg-white border-b border-x border-gray-300 absolute top-10 z-10 w-full hidden group-hover:block">
        {sortOptions.map((option) => (
          <li key={option}>
            <button
              type="button"
              className="w-full text-left px-3 py-2 transition-colors text-sm font-normal text-gray-800 cursor-pointer hover:bg-gray-100"
              onClick={() => setShortBy(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
