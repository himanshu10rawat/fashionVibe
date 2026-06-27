"use client";

import { useState } from "react";

export default function PincodeInput() {
  const [pincode, setPincode] = useState("");

  const handlePincode = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setPincode(value);
    }
  };

  return (
    <form className="relative w-max mb-2">
      <input
        onChange={handlePincode}
        value={pincode}
        type="text"
        placeholder="Enter pincode"
        name="pincode"
        className="py-2 pl-2 pr-15 rounded-sm border outline-0 border-gray-300 focus:border-pink-500 w-65"
      />
      <input
        type="submit"
        value="Check"
        className="absolute text-pink-500 font-semibold text-sm cursor-pointer right-2 top-1/2 -translate-y-1/2"
      />
    </form>
  );
}
