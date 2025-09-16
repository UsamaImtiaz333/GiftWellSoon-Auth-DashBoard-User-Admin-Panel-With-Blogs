import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const pakistaniNumberRegex = /^(\+92|0)?3\d{2}-?\d{7}$/; // Example: 0300-1234567

export const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().regex(emailRegex, "Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    role: z.enum(["user", "admin"]),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    number: z.string().regex(pakistaniNumberRegex, "Invalid Pakistani number").optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpSchemaType = z.infer<typeof signupSchema>;

