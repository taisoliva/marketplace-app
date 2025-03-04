import { useMutation } from "@tanstack/react-query";
import { ProductsService } from "../../services";
import { CreateProductSchema } from "@/modules/products/schemas/form.schema";

const useCreateProductService = () => {
  return useMutation({
    mutationFn: async (data: CreateProductSchema) => {
      const response = await new ProductsService().create(data);

      return response.data;
    },
  });
};

export { useCreateProductService };
