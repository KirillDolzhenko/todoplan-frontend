import * as z from "zod";

export const signupSchema = z
  .object({
    username: z.string().min(1).optional(),
    email: z.string().email(),
    password: z.string().min(7).max(50),
    cPassword: z.string().min(7).max(50),
  })
  .superRefine(({ password, cPassword }, ctx) => {
    if (password !== cPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match",
        path: ["cPassword"],
      });
    }
  });

export type signupType = z.infer<typeof signupSchema>;
