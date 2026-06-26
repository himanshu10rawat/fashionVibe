"use client";

import { Check, ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export default function SizeFilter() {
  const sizes = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"];
  const [isOptionShow, setIsOptionShow] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setIsOptionShow((prev) => !prev)}
        type="button"
        className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full peer cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-200"
      >
        Size
        {isOptionShow ? (
          <ChevronRightIcon strokeWidth={1} width={20} height={20} />
        ) : (
          <ChevronDownIcon strokeWidth={1} width={20} height={20} />
        )}
      </button>
      {isOptionShow && (
        <div className="items-center gap-4 flex">
          {sizes.map((size) => (
            <div key={size} className="flex items-center gap-1">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <input
                  id={size}
                  type="checkbox"
                  name="sizes"
                  className="w-4 h-4 cursor-pointer appearance-none border border-gray-400 rounded-xs checked:bg-pink-500 checked:border-pink-500 peer"
                />
                <Check
                  width={"80%"}
                  height={"80%"}
                  strokeWidth={"3"}
                  className="absolute pointer-events-none text-white left-1/2 top-1/2 -translate-1/2 hidden peer-checked:block"
                />
              </div>
              <label
                htmlFor={size}
                className="uppercase text-sm text-gray-700 cursor-pointer"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
