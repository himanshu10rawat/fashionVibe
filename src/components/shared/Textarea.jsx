import React, { useState } from "react";

export default function Textarea({
  id,
  name,
  label,
  maxCharacter,
  placeholder,
  rows,
}) {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm mb-2 font-semibold text-gray-600">
        {label}
      </label>
      <div className="relative">
        <textarea
          className="w-full border border-gray-300 rounded-sm bg-white py-2 px-4 text-gray-600 text-sm outline-0 resize-none focus:border-red-500"
          value={value}
          rows={rows}
          name={name}
          id={id}
          maxLength={maxCharacter}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="absolute bottom-3 right-3 text-gray-400 text-xs">
          {value.length}/{maxCharacter}
        </span>
      </div>
    </div>
  );
}
