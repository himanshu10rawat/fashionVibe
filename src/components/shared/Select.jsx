import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Select({
  id,
  label,
  name,
  required = false,
  options,
  register,
  errors,
}) {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [brand, setBrand] = useState(options[0]);
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <label
          htmlFor={id}
          className="text-sm mb-2 font-semibold text-gray-600"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="border border-gray-300 rounded-sm bg-white relative">
          <button
            type="button"
            onClick={() => setDropdownShow((prev) => !prev)}
            className="w-full relative py-2 px-4 flex items-center cursor-pointer text-gray-600 font-medium"
          >
            <input
              readOnly
              id={id}
              name={name}
              value={brand}
              className="w-full border-0 text-sm focus:outline-0 pointer-events-none capitalize"
              {...register(name)}
            />
            {dropdownShow ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {dropdownShow && (
            <div className="flex flex-col absolute bg-white w-full z-10 border border-gray-300 rounded-sm">
              {options.map((opt) => (
                <button
                  onClick={() => {
                    setBrand(opt);
                    setDropdownShow(false);
                  }}
                  key={opt}
                  type="button"
                  className="w-full text-left py-2 px-4 text-gray-600 text-sm capitalize cursor-pointer hover:bg-gray-100"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {errors[name] && (
        <p className="text-red-600 mt-1 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
