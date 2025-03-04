import { z } from "zod";

export const registerForm = z
  .object({
    name: z.string().nonempty({ message: "O nome é obrigatório" }),
    password: z
      .string()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
      .nonempty({ message: "A senha é obrigatória" }),
    passwordConfirmation: z
      .string()
      .min(8, {
        message: "A confirmação da senha deve ter pelo menos 8 caracteres",
      })
      .nonempty({ message: "A confirmação da senha é obrigatória" }),
    phone: z
      .string()
      .nonempty({ message: "O número de telefone é obrigatório" }),
    email: z
      .string()
      .email({ message: "O email fornecido não é válido" })
      .nonempty({ message: "O email é obrigatório" }),
    avatarId: z.string().nonempty({ message: "O nome é obrigatório" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "As senha devem ser iguais",
  });

export type RegisterSchema = z.infer<typeof registerForm>;
