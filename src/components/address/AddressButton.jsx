"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import AddressForm from "../forms/AddressForm";

export default function AddressButton() {
  const [isHover, setIsHover] = useState(false);

  return (
    <AddressForm
      buttonStyle={
        "flex items-center gap-0.5 border border-gray-300 px-5 py-2.5 rounded-sm cursor-pointer transition-colors duration-200 hover:bg-blue-600 group"
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      button={
        <>
          <Plus
            strokeWidth={3}
            stroke={`${isHover ? "#ffffff" : "#155dfc"}`}
            width={15}
            height={15}
            className="transition-all duration-200"
          />{" "}
          <span className="uppercase text-blue-600 font-bold text-sm group-hover:text-white transition-colors duration-200">
            add new address
          </span>
        </>
      }
      header={"add new address"}
    />
  );
}
