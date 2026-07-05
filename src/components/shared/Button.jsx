export default function Button({ children, areaLabel, type = "submit" }) {
  return (
    <button
      aria-label={areaLabel}
      className="w-full bg-pink-500 transition-colors ease-in-out duration-300 hover:bg-pink-400 p-3 text-white font-semibold cursor-pointer capitalize"
      type={type}
    >
      {children}
    </button>
  );
}
