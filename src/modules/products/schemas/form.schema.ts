import { z } from "zod";

export const newProductForm = z.object({
  title: z.string().nonempty({ message: "O título é obrigatório" }),
  categoryId: z.string().nonempty({ message: "A categoria é obrigatória" }),
  description: z.string().nonempty({ message: "A descrição é obrigatória" }),
  priceInCents: z
    .string()
    .refine((val) => /^[\d,.]+$/.test(val), {
      message: "Preço inválido",
    })
    .transform((val) => {
      const cleanedValue = val.replace(/[^\d]/g, "");

      return parseInt(cleanedValue, 10);
    }),
  attachmentsIds: z.string().array(),
});

export type CreateProductSchema = z.infer<typeof newProductForm>;
