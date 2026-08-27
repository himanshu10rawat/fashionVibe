import { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import Image from "next/image";

const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILES = 6;
const MAX_SIZE_MB = 2;

export default function ImageInput({
  id,
  name,
  label,
  register,
  setValue,
  errors,
  selectedImages,
  singleImage = false,
}) {
  const [images, setImages] = useState(() =>
    selectedImages
      ? selectedImages.map((img) => ({ ...img, isExisting: true }))
      : [],
  );
  const [error, setError] = useState("");

  useEffect(() => {
    register(name);
    setValue(name, images, { shouldValidate: false });
  }, [name, register, setValue, images]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    setError("");
    e.target.value = "";

    if (files.length === 0) return;

    if (images.length + files.length > MAX_FILES) {
      setError(`You can select up to ${MAX_FILES} images only.`);
      return;
    }

    const validFiles = [];

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError("Only JPG, PNG or WebP images are allowed.");
        return;
      }

      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setError(`Each image must be less than ${MAX_SIZE_MB}MB.`);
        return;
      }

      validFiles.push({
        file,
        preview: URL.createObjectURL(file),
        isExisting: false,
      });
    }

    const updated = [...images, ...validFiles];
    setImages(updated);
    setValue(name, updated, { shouldValidate: true });
  };

  const handleRemove = (index) => {
    setImages((prev) => {
      const target = prev[index];

      if (!target.isExisting) {
        URL.revokeObjectURL(target.preview);
      }

      const updated = prev.filter((_, i) => i !== index);
      setValue(name, updated, { shouldValidate: true });
      return updated;
    });
  };

  return (
    <div>
      <label htmlFor={id} className="text-sm mb-2 font-semibold text-gray-600">
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className={`${!singleImage ? "grid grid-cols-2 xl:grid-cols-3 gap-3" : ""} mt-2`}
      >
        {images.map((img, index) => (
          <div
            key={img.isExisting ? img.preview : index}
            className={`relative ${!singleImage ? "aspect-square" : "h-50"} rounded-lg overflow-hidden border border-gray-300`}
          >
            <Image
              src={img.preview}
              alt={`preview-${index}`}
              fill
              sizes="100%"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 bg-black/50 transition-colors duration-300 hover:bg-black/80 text-white rounded-full cursor-pointer p-1"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        {!singleImage
          ? images.length < MAX_FILES
          : images.length < 1 && (
              <label
                htmlFor={id}
                className={`${!singleImage ? "aspect-square" : "h-50"} rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition text-sm text-gray-500 gap-1`}
              >
                <ImagePlus size={22} />
                Add Image
              </label>
            )}

        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          name={name}
          id={id}
          hidden
          multiple={!singleImage}
          onChange={handleChange}
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

      {errors[name] && (
        <p className="text-red-600 mt-1 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}
