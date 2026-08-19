export default function Textarea({
  id,
  name,
  label,
  maxCharacter,
  placeholder,
  rows,
  register,
  errors,
  watch,
}) {
  const currentValue = watch ? watch(name) : "";
  const currentLength = currentValue?.length || 0;

  return (
    <div>
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="text-sm mb-2 font-semibold text-gray-600"
        >
          {label}
        </label>
        <div className="relative">
          <textarea
            id={id}
            name={name}
            rows={rows}
            maxLength={maxCharacter}
            placeholder={placeholder}
            {...register(name)}
            className="w-full border border-gray-300 rounded-sm bg-white py-2 px-4 text-gray-600 text-sm outline-0 resize-none focus:border-red-500"
          />
          <span className="absolute bottom-3 right-3 text-gray-400 text-xs">
            {currentLength}/{maxCharacter}
          </span>
        </div>
      </div>
      {errors[name] && (
        <p className="text-red-600 mt-1 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
