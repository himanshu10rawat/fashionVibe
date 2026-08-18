import { useState } from "react";

export default function RadioInput({ name, options, required }) {
  const [item, setItem] = useState("");
  return (
    <>
      <h3 className="capitalize text-sm font-semibold text-gray-700 mb-3">
        {name} {required && <span className="text-red-500">*</span>}
      </h3>
      <div className="flex flex-col gap-5">
        {options.map((opt) => (
          <div key={opt} className="flex gap-2 items-center">
            <input
              onChange={() => setItem(opt)}
              className="w-4 h-4"
              type="radio"
              name={name}
              id={opt}
              hidden
            />
            <label
              htmlFor={opt}
              className={`border-2 ${item === opt ? "border-red-500" : "border-gray-400"} w-4 h-4 rounded-full cursor-pointer`}
            >
              {item === opt && (
                <span className="bg-white border-4 block border-red-500 h-full w-full rounded-full"></span>
              )}
            </label>
            <label
              className="capitalize font-semibold text-sm text-gray-800"
              htmlFor={opt}
            >
              {opt}{" "}
              <span
                className={`ml-2 text-xs font-medium px-2 py-1 rounded-sm ${opt === "active" ? "text-green-500 bg-green-100" : opt === "draft" ? "text-orange-500 bg-orange-100" : "text-gray-500 bg-gray-100"}`}
              >
                {opt === "active"
                  ? "Visible on store"
                  : opt === "draft"
                    ? "Not visible on store"
                    : "Hidden from store"}
              </span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
