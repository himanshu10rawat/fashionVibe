import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";

export default function CheckboxInput({
  label,
  name,
  defaultOptions,
  placeholder,
  isColorInput,
  register,
  setValue,
  errors,
  checkedOptions = null,
}) {
  const [selectedItems, setSelectedItems] = useState(
    checkedOptions ? checkedOptions : [],
  );

  const [customItems, setCustomItems] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Register field once so RHF/Zod knows about it (default value)
  useEffect(() => {
    register(name);
  }, [name, register]);

  const toggleItem = (item) => {
    setSelectedItems((prev) => {
      const updated = prev.includes(item)
        ? prev.filter((s) => s !== item)
        : [...prev, item];

      setValue(name, updated, { shouldValidate: true });
      return updated;
    });
  };

  const handleAddCustomItem = () => {
    const value = inputValue.trim().toUpperCase();
    if (
      value &&
      !defaultOptions.includes(value) &&
      !customItems.includes(value)
    ) {
      setCustomItems((prev) => [...prev, value]);
      setSelectedItems((prev) => {
        const updated = [...prev, value];
        setValue(name, updated, { shouldValidate: true });
        return updated;
      });
    }
    setInputValue("");
    setShowInput(false);
  };

  const allItems = [...defaultOptions, ...customItems];

  return (
    <div className="flex flex-col mb-3 last:mb-0">
      <label className="text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <div className="flex flex-wrap gap-2">
        {allItems.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => toggleItem(item)}
            style={isColorInput ? { backgroundColor: item } : undefined}
            className={`w-10 h-10 ${isColorInput ? "rounded-full" : "rounded-sm"} border-2 border-gray-100 text-sm font-medium transition duration-500 cursor-pointer outline-2
              ${selectedItems.includes(item) ? "outline-red-500" : "hover:outline-red-200 outline-transparent"}`}
          >
            {!isColorInput && item}
          </button>
        ))}
        {showInput ? (
          <div className="flex items-center gap-1">
            <input
              type="text"
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCustomItem()}
              placeholder={placeholder}
              className="w-10 h-10 rounded-sm border border-gray-300 text-sm text-center outline-none"
            />
            <button
              type="button"
              onClick={() => setShowInput(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowInput(true)}
            className="w-10 h-10 flex items-center justify-center rounded-sm border border-dashed border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600 transition"
          >
            <Plus size={16} />
          </button>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Add available {label} for this product
      </p>

      {errors[name] && (
        <p className="text-red-600 mt-1 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
