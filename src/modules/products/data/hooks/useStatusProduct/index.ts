import { useMutation } from "@tanstack/react-query";
import { ProductsService } from "../../services";

interface Props {
  id: string;
}
const useStatusProductService = ({ id }: Props) => {
  return useMutation({
    mutationFn: async (status: string) => {
      const response = await new ProductsService().status(id, status);

      return response.data;
    },
  });
};

export { useStatusProductService };
