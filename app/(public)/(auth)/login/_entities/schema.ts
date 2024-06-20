import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email harus diisi" })
    .email({ message: "Email tidak valid" }),
  password: z.string().min(1, { message: "Kata sandi harus disii" }),
});

export type TLoginForm = z.infer<typeof schema>;
