import { Search } from "lucide-react";

export default function SearchInput({
  name = "search",
  placeholder,
  width = "w-120",
  bgColor = "bg-white",
  focusBgColor = "focus-within:bg-white",
  rounded = "rounded-full",
  borderSize = "border",
  borderColor = "border-gray-200",
  focusBorderColor = "has-focus:border-gray-200",
  type = "search",
  textColor = "text-gray-400",
  placeholderColor = "text-gray-400",
  textSize = "text-sm",
  strokeWidth = "1",
  strokeColor = "darkGray",
  iconHeight = "17",
  iconWidth = "17",
}) {
  return (
    <div
      className={`flex items-center ${borderSize} ${bgColor} ${width} py-2.5 px-3 ${rounded} ${borderColor} mx-2 lg:mx-0 mb-4 lg:mb-0 mt-18 lg:mt-0 shadow-lg lg:shadow-none ${focusBgColor} ${focusBorderColor}`}
    >
      <Search
        height={iconHeight}
        width={iconWidth}
        strokeWidth={strokeWidth}
        stroke={strokeColor}
      />
      <input
        className={`${textColor} ml-3 outline-0 ${textSize} grow ${placeholderColor} has`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
