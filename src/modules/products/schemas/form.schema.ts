import { z } from "zod";

export const newProductForm = z.object({
  title: z.string().nonempty({ message: "O título é obrigatório" }),
  categoryId: z.string().nonempty({ message: "A categoria é obrigatória" }),
  description: z.string().nonempty({ message: "A descrição é obrigatória" }),
  priceInCents: z.coerce
    .number({ invalid_type_error: "Preço inválido" })
    .positive({ message: "O preço deve ser maior que zero" }),
  attachmentsIds: z.string().array(),
});

export type CreateProductSchema = z.infer<typeof newProductForm>;
