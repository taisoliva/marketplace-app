"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "../../services";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const service = new ProductsService();
      const { data } = await service.categories();
      return data;
    },
  });
};

export { useCategories };
