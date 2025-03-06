"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "../../services";

interface Props {
  id: string;
  enabled?: boolean;
}
const useProductsDetails = ({ id }: Props) => {
  return useQuery({
    queryKey: ["products-list", id],
    queryFn: async () => {
      const service = new ProductsService();
      const { data } = await service.productById(id);
      return data;
    },
  });
};

export { useProductsDetails };
