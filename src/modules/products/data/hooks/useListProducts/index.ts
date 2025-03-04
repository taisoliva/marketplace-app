"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "../../services";
import { IListProductsParams } from "../../services/responses";

type Props = {
  params: IListProductsParams;
  refetchOnMount?: boolean;
  enabled?: boolean;
};

const useAvailableProducts = ({
  params,
  refetchOnMount = false,
  enabled = false,
}: Props) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const service = new ProductsService();
      const { data } = await service.listProducts(params);
      return data;
    },
    refetchOnMount,
    enabled,
  });
};

export { useAvailableProducts };
