import { z } from "zod";

export const editProfileSchema = z.object({
  mobileNumber: z
    .string()
    .regex(
      /^[0-9]{10}$/,
      "Please enter a valid 10-digit mobile number (e.g. 9876543210)",
    ),
  email: z.email("Please enter a valid email address"),
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(
      /^[A-Za-z]+ [A-Za-z]+$/,
      "Please enter your full name (e.g. John Doe)",
    ),
  gender: z.string(),
  dateOfBirth: z
    .string()
    .regex(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Date must be in dd/mm/yyyy format",
    )
    .refine((value) => {
      const [day, month, year] = value.split("/").map(Number);
      const date = new Date(year, month - 1, day);

      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    }, "Please enter a valid date"),
});
