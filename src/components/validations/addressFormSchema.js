import { z } from "zod";

export const addressFormSchema = z.object({
  username: z
    .string()
    .min(3, "Username is required")
    .regex(/^[A-Za-z\s]+$/, "Username should only contain letters"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
  state: z
    .string()
    .min(1, "State is required")
    .regex(/^[A-Za-z\s]+$/, "State should only contain letters"),
  address: z.string().trim().min(1, "Address is required"),
  landmark: z
    .string()
    .min(1, "Landmark is required")
    .regex(/^[A-Za-z\s]+$/, "Landmark should only contain letters"),
  city: z
    .string()
    .min(1, "City is required")
    .regex(/^[A-Za-z\s]+$/, "City should only contain letters"),
  makeDefault: z.boolean().optional(),
});
