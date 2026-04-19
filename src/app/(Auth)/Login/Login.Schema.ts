import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod.string().min(1, "Email is required").email("Invalid email"),

  password: zod
    .string()
    .min(1, "Password is required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Use at least 8 characters, including a capital letter, a small letter, a number, and a symbol",
    ),
});

export type LoginDataValues = zod.infer<typeof loginSchema>;
