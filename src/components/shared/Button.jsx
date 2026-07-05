export default function Button({
  children,
  areaLabel,
  type = "submit",
  bgColor = "bg-pink-400",
  bgHoverColor = "hover:bg-pink-500",
}) {
  return (
    <button
      aria-label={areaLabel}
      className={`w-full ${bgColor} transition-colors ease-in-out duration-300 ${bgHoverColor} p-3 text-white font-semibold cursor-pointer capitalize`}
      type={type}
    >
      {children}
    </button>
  );
}
