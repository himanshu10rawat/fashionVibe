"use client";

import React, { useState } from "react";

export default function ProductFilter() {
  const filterOptions = [
    { option: "all", length: "245" },
    { option: "active", length: "198" },
    { option: "draft", length: "22" },
    { option: "out of stock", length: "25" },
    { option: "inactive", length: "0" },
  ];

  const [filterState, setFilterState] = useState(filterOptions[0].option);

  return (
    <div className="flex items-center gap-5 mt-5">
      {filterOptions.map(({ option, length }) => (
        <button
          onClick={() => setFilterState(option)}
          key={option}
          type="button"
          className={`text-sm ${filterState === option && "bg-gray-100"} ${filterState === option ? "text-red-500" : "text-gray-700"} ${filterState === option && "font-semibold"} rounded-sm py-1.5 px-3 capitalize ${filterState !== option && "cursor-pointer"}`}
        >
          {option}{" "}
          <span className={`${filterState !== option && "text-gray-400"}`}>
            ({length})
          </span>
        </button>
      ))}
    </div>
  );
}
