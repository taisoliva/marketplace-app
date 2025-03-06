import { useMutation } from "@tanstack/react-query";
import { ProductsService } from "../../services";
import { CreateProductSchema } from "@/modules/products/schemas/form.schema";

interface Props {
  id: string;
}
const useEditProductService = ({ id }: Props) => {
  console.log("id", id);
  return useMutation({
    mutationFn: async (data: CreateProductSchema) => {
      const response = await new ProductsService().edit(id, data);

      return response.data;
    },
  });
};

export { useEditProductService };
