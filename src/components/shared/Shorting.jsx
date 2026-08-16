"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function Shorting({
  sortOptions,
  width = "w-70",
  borderRadius = "rounded-none",
  ulOptionsRadius = "group-hover:rounded-b-none",
  sortBy = true,
}) {
  const [shortBy, setShortBy] = useState(sortOptions[0]);

  return (
    <div className={`relative ${width} group`}>
      <div
        className={`flex items-center justify-between bg-white border border-gray-300 py-2 px-3 text-sm font-normal text-gray-800 ${borderRadius} group-hover:rounded-b-none`}
      >
        <div>
          {sortBy && "Sort by : "}
          <span className="font-semibold">{shortBy}</span>
        </div>
        <ChevronDownIcon strokeWidth={1} />
      </div>
      <ul
        className={`bg-white border-b border-x border-gray-300 absolute top-10 z-10 w-full hidden group-hover:block ${ulOptionsRadius} overflow-hidden`}
      >
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
