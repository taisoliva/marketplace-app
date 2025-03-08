import { z } from "zod";

export const filterProductForm = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
});

export type FilterProductSchema = z.infer<typeof filterProductForm>;
