import { Eye, EyeOff, IndianRupee } from "lucide-react";

export default function Input({
  register,
  passwordVisible,
  setPasswordVisible,
  errors,
  label,
  name,
  id,
  autoComplete,
  type = "text",
  rounded = true,
  borderTop = "border-t",
  borderLeft = "border-l",
  borderRight = "border-r",
  borderBottom = "border-b",
  paddingX = "px-4",
  labelLeft = "left-4",
  focusBorderColor = "focus:border-pink-400",
  focusLabelTextColor = "peer-focus:text-gray-400",
  adminForm = false,
  placeholder,
  required = false,
  isPrice = false,
}) {
  return (
    <div className="w-full">
      <div className="relative flex flex-col">
        <div className={`relative ${adminForm && "order-2"}`}>
          <input
            id={id}
            autoComplete={autoComplete}
            className={`${isPrice && "pl-10"} py-2 text-sm ${paddingX} text-gray-600 ${borderTop} ${borderLeft} ${borderRight} ${borderBottom} border-gray-300 ${focusBorderColor} outline-0 w-full ${rounded && "rounded-sm"} bg-white peer`}
            type={`${passwordVisible ? (passwordVisible[name] ? "text" : "password") : type}`}
            placeholder={placeholder ? placeholder : ""}
            {...register(name)}
          />
          {isPrice && (
            <span className="absolute top-[50%] -translate-y-1/2 left-0 h-[94%] w-8 flex items-center justify-center text-gray-600 border-r border-gray-300">
              <IndianRupee size={12} />
            </span>
          )}
        </div>
        <label
          htmlFor={id}
          className={`${!adminForm && "absolute"} ${labelLeft} ${!adminForm && "top-1/2 -translate-y-1/2 text-gray-400 font-light pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white"} $ ${!adminForm && focusLabelTextColor && "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white"} ${adminForm && "text-sm mb-2 font-semibold text-gray-600"}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {passwordVisible && (
          <div className="absolute flex items-center right-2 top-1/2 -translate-y-1/2">
            <button
              aria-label={`${passwordVisible[name] ? "Hide password" : "Show Password"}`}
              className="cursor-pointer"
              type="button"
              onClick={() =>
                setPasswordVisible((prev) => ({ ...prev, [name]: !prev[name] }))
              }
            >
              {passwordVisible[name] ? (
                <Eye width={16} height={16} strokeWidth={1} />
              ) : (
                <EyeOff width={16} height={16} strokeWidth={1} />
              )}
            </button>
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-600 mt-1 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
