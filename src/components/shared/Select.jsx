"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Select({
  id,
  label,
  name,
  required = false,
  options,
  register,
  errors,
  setValue,
  watch,
}) {
  const [dropdownShow, setDropdownShow] = useState(false);
  const wrapperRef = useRef(null);

  // options[0] treated as placeholder text (e.g. "select brand")
  const placeholderText = options[0];
  const realOptions = options.slice(1);

  const selectedValue = watch ? watch(name) : "";

  // register field for validation, but value is set manually via setValue
  useEffect(() => {
    if (register) {
      register(name, {
        required: required ? `${label} is required` : false,
      });
    }
  }, [register, name, required, label]);

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (opt) => {
    setValue(name, opt, { shouldValidate: true, shouldDirty: true });
    setDropdownShow(false);
  };

  return (
    <div className="w-full" ref={wrapperRef}>
      <div className="w-full flex flex-col relative">
        <label
          htmlFor={id}
          className="text-sm mb-2 font-semibold text-gray-600"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <div
          className={`border rounded-sm bg-white relative ${errors?.[name] ? "border-red-500" : "border-gray-300"}`}
        >
          <button
            type="button"
            id={id}
            onClick={() => setDropdownShow((prev) => !prev)}
            className="w-full py-2 px-4 flex items-center justify-between cursor-pointer text-sm font-medium text-left"
          >
            <span
              className={`capitalize truncate ${selectedValue ? "text-gray-700" : "text-gray-400"}`}
            >
              {selectedValue || placeholderText}
            </span>
            {dropdownShow ? (
              <ChevronUp size={18} className="text-gray-500 shrink-0" />
            ) : (
              <ChevronDown size={18} className="text-gray-500 shrink-0" />
            )}
          </button>

          {dropdownShow && (
            <div className="flex flex-col absolute left-0 right-0 top-[calc(100%+4px)] bg-white z-20 border border-gray-200 rounded-sm shadow-md max-h-56 overflow-auto">
              {realOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`w-full text-left py-2 px-4 text-sm capitalize cursor-pointer hover:bg-gray-50 hover:text-red-600 transition-colors ${selectedValue === opt ? "bg-red-50 text-red-600 font-semibold" : "text-gray-600"}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {errors?.[name] && (
        <p className="text-red-600 mt-1 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
