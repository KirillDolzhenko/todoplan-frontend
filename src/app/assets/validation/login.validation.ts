import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(7).max(50),
});

export type loginType = z.infer<typeof loginSchema>;
