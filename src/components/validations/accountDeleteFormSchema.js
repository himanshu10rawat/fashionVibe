import { z } from "zod";

export const accountDeleteFormSchema = z.object({
  termAndConditions: z.literal(true, {
    error: () => ({
      message: "Please agree to delete your account",
    }),
  }),
});
