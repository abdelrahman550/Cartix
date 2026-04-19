import * as zod from "zod";

export const signupSchema = zod
  .object({
    name: zod
      .string()
      .min(3, "Full name is required")
      .refine((val) => val.trim().split(/\s+/).length >= 2, {
        message: "Please enter your first and last name",
      }),

    email: zod.string().min(1, "Email is required").email("Invalid email"),

    password: zod
      .string()
      .min(1, "Password is required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Use at least 8 characters, including a capital letter, a small letter, a number, and a symbol",
      ),

    rePassword: zod.string().min(1, "Please confirm your password"),

    phone: zod
      .string()
      .min(1, "Phone number is required")
      .regex(/^(010|011|012|015)\d{8}$/, "Invalid Egyptian phone number"),
  })
  .refine(
    function (data) {
      return data.password === data.rePassword;
    },
    {
      error: "Passwords do not match.",
      path: ["rePassword"],
    },
  );

export type SignupDataValues = zod.infer<typeof signupSchema>;
