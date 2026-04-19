import * as zod from "zod";

export const CheckoutShema = zod.object({
  city: zod.string().min(2, "City name must be at least 2 characters"),

  phone: zod
    .string()
    .min(1, "Phone number is required")
    .regex(/^(010|011|012|015)\d{8}$/, "Invalid Egyptian phone number"),

  details: zod.string().min(1, "Address details are required"),
  postalCode: zod
    .string()
    .regex(/^\d{5}$/, "Postal code must be exactly 5 digits"),
});

export type CheckoutDataValues = zod.infer<typeof CheckoutShema>;
