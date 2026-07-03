"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

export default function FilterSearch({ filterName }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      {!isSearchOpen ? (
        <div className="flex justify-between items-center mb-3">
          <h3 className="uppercase font-semibold text-gray-800 text-sm">
            {filterName}
          </h3>
          <button
            onClick={() => setIsSearchOpen(true)}
            type="button"
            className="bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-200"
          >
            <Search width={16} height={16} className="text-gray-500" />
          </button>
        </div>
      ) : (
        <div className="bg-gray-100 mb-3 relative rounded-3xl">
          <input
            type="search"
            placeholder={`search for ${filterName}`}
            name={filterName}
            className=" capitalize text-sm w-full px-4 py-1.5 rounded-3xl"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-90"
          >
            <X className="text-gray-600" width={20} height={20} />
          </button>
        </div>
      )}
    </>
  );
}
