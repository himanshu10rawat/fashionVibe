import { Eye, EyeOff } from "lucide-react";

export default function Input({
  register,
  passwordVisible,
  setPasswordVisible,
  errors,
  label,
  name,
  id,
  autoComplete,
  type,
  rounded = true,
}) {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          id={id}
          autoComplete={autoComplete}
          className={`py-2 px-4 text-gray-600 border border-gray-300 focus:border-pink-400 outline-0 w-full ${rounded && "rounded-sm"} bg-white peer`}
          type={`${passwordVisible ? (passwordVisible[name] ? "text" : "password") : type}`}
          placeholder=" "
          {...register(name)}
        />
        <label
          htmlFor={id}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-light pointer-events-none transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white"
        >
          {label}
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
