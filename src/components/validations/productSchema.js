import { z } from "zod";

export const DESCRIPTION_MAX_LENGTH = 500;

const ALLOWED_TYPES = ["images/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILES = 6;
const MAX_SIZE_MB = 2;

const existingImageSchema = z.object({
  preview: z.string(),
  isExisting: z.literal(true),
});

const newImageSchema = z.object({
  file: z.instanceof(File),
  preview: z.string(),
  isExisting: z.literal(false).optional(),
});

export const productSchema = z.object({
  productName: z.string().min("1", "Product Name is required."),
  brand: z.string().min(1, "Brand is required."),
  description: z
    .string()
    .max(
      DESCRIPTION_MAX_LENGTH,
      `Description must be under ${DESCRIPTION_MAX_LENGTH} characters.`,
    ),
  category: z.string().min(1, "Category is required."),
  subCategory: z.string().min(1, "Sub Category is required."),
  price: z.string().min(1, "Price is required"),
  discountPrice: z.string(),
  tax: z.string(),
  productImages: z
    .array(z.union([existingImageSchema, newImageSchema]))
    .min(1, "Please upload at least 1 image.")
    .max(MAX_FILES, `You can upload up to ${MAX_FILES} images only`)
    .refine(
      (imgs) =>
        imgs.every(
          (img) => img.isExisting || ALLOWED_TYPES.includes(img.file.type),
        ),
      "Only JPG, PNG or WebP images are allowed.",
    )
    .refine(
      (imgs) =>
        imgs.every(
          (img) => img.isExisting || img.file.size <= MAX_SIZE_MB * 1024 * 1024,
        ),
      `Each image must be less than ${MAX_SIZE_MB}MB.`,
    ),
  sku: z.string().min(1, "SKU is required."),
  stockQuantity: z.string().min(1, "Stock Quantity is required."),
  lowStockThreshold: z.string(),
  stockStatus: z.string().min(1, "Stock Status is required."),
  productSizes: z.array(z.string()).min(1, "Select at least 1 size."),
  productColors: z.array(z.string()).min(1, "Select at least 1 color."),
  productStatus: z.string().min(1, "Product Status is required."),
});
