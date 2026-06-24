import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = z.object({

    email: z.string().email("invalid email"),
    password: z.string().min(8, "minimum 8 characters").max(16, "maximum 16 characters"),
    confirmPassword: z.string(),
    username: z.string().min(4, "minimum 4 characters").max(12, "maximum 12 characters"),

}).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Password mismatch",
        path: ["confirmPassword"]
    }
)